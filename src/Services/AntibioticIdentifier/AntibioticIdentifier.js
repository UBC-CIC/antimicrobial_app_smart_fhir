import generateUMLSToken from "../UMLS/generateUMLSToken";
const axios = require('axios');



const antibioticIdentifier = async (medicationIdentities, tgt) => {
    let shouldInclude = false;

    let rxNormPrediction = null;
    let rxNormPredictions = [];
    if ((medicationIdentities.length > 0) && !shouldInclude) {
        for (let result of medicationIdentities) {
            if (result.Entities.length > 0) {
                rxNormPrediction = {
                    prediction: result.Entities[0].RxNormConcepts[0].Description,
                    code: result.Entities[0].RxNormConcepts[0].Code,
                    confidence: result.Entities[0].RxNormConcepts[0].Score
                }
                rxNormPredictions.push(rxNormPrediction);
                // if our confidence in our closest matching RxNorm concept value is low,
                // include the medication in the result as a fail safe.
                // Better to include false positive then omit actual antibiotic.
                if (result.Entities[0].RxNormConcepts[0].Code < 0.60) {
                    shouldInclude = true;
                }
            }
        }
    }
    if (!shouldInclude) {
        shouldInclude = await rxNormPredictionsHelper(rxNormPredictions, tgt);
    }

    return shouldInclude;
}

//=============================================---HELPER FUNCTIONS---===================================================

// processes the results of Comprehend Medical InferRXNorm
const rxNormPredictionsHelper = async (rxNormPredictions, tgt) => {
    let shouldInclude = false;

    for (let prediction of rxNormPredictions) {
        try {
            // check the RxNorm database for property codes for our chosen RxConcept
            // check for ATC and MESH properties for validation
            if (prediction && !shouldInclude) {
                try {
                    let linkATCEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${prediction.code}/property.json?propName=ATC`;
                    let rxNormResponseATC = await axios.get(linkATCEndpoint);
                    let atc = [];
                    if (rxNormResponseATC) {
                        if (rxNormResponseATC.data.propConceptGroup) {
                            let properties = rxNormResponseATC.data.propConceptGroup.propConcept;
                            if (properties.length > 0) {
                                properties.forEach(property => {
                                    atc.push(property.propValue);
                                });
                            }
                        }
                    }

                    // check if were able to retrieve ATC codes and if it's an antibiotic (starts with "J")
                    if ((atc.length !== 0) && !shouldInclude) {
                        // eslint-disable-next-line no-loop-func
                        atc.forEach(entry => {
                            if (entry.startsWith("J")) {
                                shouldInclude = true;
                            }
                        })
                    }

                    // if we don't have an atc, try to retrieve a MESH value (Medical Subject Heading)
                    // then check if mesh includes code for antibiotics
                    let mesh = [];
                    if (!shouldInclude) {
                        let linkMESHEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${prediction.code}/property.json?propName=MESH`;
                        let rxNormResponseMESH = await axios.get(linkMESHEndpoint);

                        if (rxNormResponseMESH) {
                            if (rxNormResponseMESH.data.propConceptGroup) {
                                let properties = rxNormResponseMESH.data.propConceptGroup.propConcept;
                                if (properties.length > 0) {
                                    properties.forEach(property => {
                                        mesh.push(property.propValue);
                                    });
                                }
                            }
                        }

                        for (let entry of mesh) {
                            let token = await generateUMLSToken(tgt);
                            let authURL = `https://uts-ws.nlm.nih.gov/rest/content/current/source/MSH/${entry}/attributes?includeAttributeNames=PA&ticket=${token}`;
                            let results = await axios.get(authURL);
                            if (results.data.result.length > 0) {
                                for (let entry of results.data.result) {
                                    if (entry.value === "D000900") {
                                        shouldInclude = true;
                                    }
                                }
                            }
                        }
                    }

                } catch (error) {
                    console.error(error);
                    // fail-safe: return true if we hit an error.
                    // Better to include false positive then omit an actual antibiotic.
                    return true;
                }
            }


        } catch (error) {
            console.error(error);
            // fail-safe: return true if we hit an error.
            // Better to include false positive then omit an actual antibiotic.
            return true;
        }
    }

    console.log("rxNorm return value: ", shouldInclude);
    return shouldInclude;
}


//=====================================================================================================================
export default antibioticIdentifier;