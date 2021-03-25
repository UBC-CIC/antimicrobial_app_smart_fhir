import generateUMLSToken from "../UMLS/generateUMLSToken";
const axios = require('axios');



const antibioticIdentifierAlternate = async (rxNormCodes, tgt) => {
    let shouldInclude = false;

    // traverse hierarchy
    if (!shouldInclude) {
        shouldInclude = await hierarchyHelper(rxNormCodes);
    }


    let atcCodes = [];
    let meshCodes = [];
    // Check if ATC or MESH codes exists
    if (!shouldInclude) {
        for (let rxNormCode of rxNormCodes) {
            // check for ATC codes
               let atcResponse = await retrieveCode(rxNormCode, "ATC");
               if (atcResponse.length > 0) {
                   atcResponse.forEach(code => {
                       atcCodes.push(code);
                   })
                   atcCodes.forEach(code => {
                       if (code.startsWith("J") || code.startsWith("QJ")) {
                           return true;
                       }
                   });
               }
            // check for MeSH codes
            if (!shouldInclude) {
                let meshResponse = await retrieveCode(rxNormCode, "MESH");
                if (meshResponse.length > 0) {
                    meshResponse.forEach(code => {
                        meshCodes.push(code);
                    })
                    for (let code of meshCodes) {
                        try {
                            let token = await generateUMLSToken(tgt);
                            let authURL = `https://uts-ws.nlm.nih.gov/rest/content/current/source/MSH/${code}/attributes?includeAttributeNames=PA&ticket=${token}`;
                            let results = await axios.get(authURL);
                            if (results.data.result.length > 0) {
                                for (let entry of results.data.result) {
                                    if (entry.value === "D000900") {
                                        return true;
                                    }
                                }
                            }
                        } catch (e) {
                            console.log("Error verifying MeSH code: ", e);
                        }
                    }
                }
            }
        }
    }

    return shouldInclude;
}
//=============================================---HELPER FUNCTIONS---===================================================

// check hierarchy data
const hierarchyHelper = async (rxNormCodes) => {
    for (let rxNormCode of rxNormCodes) {
        try {
            let meshResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${rxNormCode}&relaSource=MESH`);
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
            let atcResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${rxNormCode}&relaSource=ATC`);
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
            let fmtsmeResponse = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxclass/class/byRxcui.json?rxcui=${rxNormCode}&relaSource=FMTSME&relas=has_tc`);
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

// Retrieve appropriate codes from RxNorm
const retrieveCode = async (rxNormCode, codeType) => {
    let response = [];
    try {
        let endpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${rxNormCode}/property.json?propName=${codeType}`;
        let getResponse = await axios.get(endpoint);
        if (getResponse) {
            if (getResponse.data.propConceptGroup) {
                let properties = getResponse.data.propConceptGroup.propConcept;
                if (properties.length > 0) {
                    properties.forEach(property => {
                        response.push(property.propValue);
                    });
                }
            }
        }

    } catch (e) {
        console.log("Error retrieving code: ", e);
    }
    return response;
}



//=====================================================================================================================
export default antibioticIdentifierAlternate;