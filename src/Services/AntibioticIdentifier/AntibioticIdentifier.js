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


    for (let prediction of rxNormPredictions) {
            // check the RxNorm database for property codes for our chosen RxConcept
            // check for ATC and MESH properties for validation
           // if a match is found, return true
            if (prediction) {
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
                    if (atc.length !== 0) {
                        // eslint-disable-next-line no-loop-func
                        atc.forEach(entry => {
                            if (entry.startsWith("J") || entry.startsWith("QJ")) {
                                return true;
                            }
                        })
                    }

                    // if we don't have an atc, try to retrieve a MESH value (Medical Subject Heading)
                    // then check if mesh includes code for antibiotics
                    let mesh = [];

                        let rxNormResponseMESH;
                            let linkMESHEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${prediction.code}/property.json?propName=MESH`;
                            rxNormResponseMESH = await axios.get(linkMESHEndpoint);
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
                                        return true;
                                    }
                                }
                            }
                        }


                } catch (error) {
                    console.error(error);
                    // fail-safe - return true. Better to include false positives then omit actual antibiotic
                    return true;
                }
            }

    }

    return false;
}


//=====================================================================================================================
export default antibioticIdentifier;