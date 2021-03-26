const axios = require('axios');



const antibioticIdentifier = async (medicationIdentities) => {
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
        shouldInclude = await rxNormPredictionsHelper(rxNormPredictions);
    }

    return shouldInclude;
}

//=============================================---HELPER FUNCTIONS---===================================================

// processes the results of Comprehend Medical InferRXNorm
const rxNormPredictionsHelper = async (rxNormPredictions) => {


    for (let prediction of rxNormPredictions) {
        try {
            let meshResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${prediction.code}&relaSource=MESH`);
            if (meshResponse) {
                if (meshResponse.data.rxclassDrugInfoList) {
                    for (let entry of meshResponse.data.rxclassDrugInfoList.rxclassDrugInfo) {
                        if (entry.rxclassMinConceptItem.classId === "D000900") {
                            return true;
                        }
                    }
                }
            }

        } catch (e) {
            console.log("Error retrieving MeSH information: ", e);
        }

        try {
            let atcResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${prediction.code}&relaSource=ATC`);
            if (atcResponse) {
                if (atcResponse.data.rxclassDrugInfoList){
                    for (let entry of atcResponse.data.rxclassDrugInfoList.rxclassDrugInfo) {
                        if (entry.rxclassMinConceptItem.classId.startsWith("J") || entry.rxclassMinConceptItem.classId.startsWith("QJ")) {
                            return true;
                        }
                    }
                }
            }

        } catch (e) {
            console.log("Error retrieving ATC information: ", e);
        }

        try {
            let fmtsmeResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${prediction.code}&relaSource=FMTSME&relas=has_tc`);
            if (fmtsmeResponse) {
                if (fmtsmeResponse.data.rxclassDrugInfoList){
                    for (let entry of fmtsmeResponse.data.rxclassDrugInfoList.rxclassDrugInfo) {
                        if (entry.rxclassMinConceptItem.classId === "N0000178296") {
                            return true;
                        }
                    }
                }
            }
        } catch (e) {
            console.log("Error retrieving FMTSME information: ", e);
        }

    }

    return false;
}


//=====================================================================================================================
export default antibioticIdentifier;