const axios = require('axios');



const antibioticIdentifierAlternate = async (rxNormCodes) => {

    return await hierarchyHelper(rxNormCodes);

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


//=====================================================================================================================
export default antibioticIdentifierAlternate;