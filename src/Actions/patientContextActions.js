import medicationIdentifier from "../Services/ComprehendMedical/medicationIdentifier";
import medicationParser from "../Services/ComprehendMedical/medicationParser";
import generateUMLSToken from "../Services/UMLS/generateUMLSToken";
import antibioticIdentifier from "../Services/AntibioticIdentifier/AntibioticIdentifier.js";
import antibioticIdentifierAlternate from "../Services/AntibioticIdentifier/AntibioticIdentifierAlternate";
const axios = require('axios');



//=====================================---SET PATIENT DATA---========================================

// Sets basic patient information
export const setPatientData = (payload) => {
    return {
        type: "SET_PATIENT_DATA",
        payload: payload,
    }
}

// Sets patient observation data
export const setObservationData = (payload) => {
    return {
        type: "SET_OBSERVATION_DATA",
        payload: payload,
    }
}

// Sets graph to display
export const setGraphToDisplay = (payload) => {
    return {
        type: "SET_GRAPH_DISPLAY",
        payload: payload,
    }
}

// Set graph data start date
export const setGraphDataStart = (payload) => {
    return {
        type: "SET_GRAPH_DATA_START_DATE",
        payload: payload,
    }
}

//=====================================---PROCESS MEDICATION DATA---========================================

// Initiates setting patient medication data
export const setMedicationData = (payload) => {
    return (dispatch) => {
        dispatch(processMedicationData(payload));
    }
}

// Processes patient medication data
export const processMedicationData = (meds) => {
    return async (dispatch) => {
        let antibioticsArray = [];
        let medication = meds.medications;
        let tgt = meds.tgt;
        for (let medicine of medication) {
            let shouldInclude = false;
            console.log("input: ", medicine.resource.medicationCodeableConcept.text);
            let hasRxNormCode;
            let rxNormCodes = [];
            try {
                // check for rxNorm code
                for (let coding of medicine.resource.medicationCodeableConcept.coding) {
                    if (coding.system === "http://www.nlm.nih.gov/research/umls/rxnorm"){
                        hasRxNormCode = true;
                        rxNormCodes.push(coding.code);
                    }
                }
                if (rxNormCodes.length > 0) {
                    shouldInclude = await antibioticIdentifierAlternate(rxNormCodes, tgt);
                    console.log("Antibiotic identifier alternate response: ", shouldInclude);
                    /*let linkSNOWEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${rxNormCodes[0]}/property.json?propName=SNOMEDCT`;
                    let rxNormResponseSNOW = await axios.get(linkSNOWEndpoint);
                    console.log("Snowmed: ", rxNormResponseSNOW);
                    let snowCodes = [];
                    if (rxNormResponseSNOW) {
                        if (rxNormResponseSNOW.data.propConceptGroup) {
                            let properties = rxNormResponseSNOW.data.propConceptGroup.propConcept;
                            if (properties.length > 0) {
                                properties.forEach(property => {
                                    snowCodes.push(property.propValue);
                                });
                            }
                        }
                    }
                   if (snowCodes.length !== 0) {
                        for (let entry of snowCodes) {
                            let token = await generateUMLSToken(tgt);
                            let authURL = `https://uts-ws.nlm.nih.gov/rest/content/current/source/SNOMEDCT_US/${entry}/relations?includeAdditionalRelationLabels=plays_role&ticket=${token}`;
                            let snowResults = await axios.get(authURL);
                            console.log("snowmed results: ", snowResults);
                        }
                    }*/

                }
            } catch (e) {

            }

            let medicationIdentities = [];
            if (!hasRxNormCode) {
                // try to parse description to extract medication name
                let parsedMedication;
                try {
                    parsedMedication = await medicationParser(medicine.resource.medicationCodeableConcept.text);
                } catch (error) {
                    console.error(error);
                    // error fail safe
                    shouldInclude = true;
                }

                // if we were able to parse the medication name, we call inferRxNorm to find the closest
                // matching rxNorm concept and code
                let result;
                if (parsedMedication && !shouldInclude) {
                    for (let entity of parsedMedication.Entities) {
                        if ((entity.Category === "MEDICATION") && (entity.Score > 0.75)) {
                            result = await medicationIdentifier(entity.Text);
                            console.log("parserOutput: ", result);
                            medicationIdentities.push(result);
                        } else if ((entity.Category === "MEDICATION") && (entity.Score <= 0.75)) {
                            shouldInclude = true;
                        }
                    }
                }
            }


            // check if medication is an antibiotic
            if (!shouldInclude) {
                shouldInclude = await antibioticIdentifier(medicationIdentities, tgt);
            }


            let startDate = null;
            let endDate = null;
            let description = null;
            let dosage = null;
            let status = null;
            try {
                if (medicine.resource.dosageInstruction) {
                    if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                        startDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start);
                    }
                }
                if (medicine.resource.dosageInstruction) {
                    if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                        if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end) {
                            endDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end);
                        }
                    }
                }

                if (medicine.resource.authoredOn && !startDate) {
                    startDate = new Date(medicine.resource.authoredOn);
                }

            } catch (error) {

            }


            try {
                description = medicine.resource.medicationCodeableConcept.text;
                status = medicine.resource.status;

                if (medicine.resource.dosageInstruction[0].text) {
                    dosage = medicine.resource.dosageInstruction[0].text;
                } else if (medicine.resource.dosageInstruction[0].patientInstruction) {
                    dosage = medicine.resource.dosageInstruction[0].patientInstruction;
                }

            } catch (error) {

            }


            let formattedAntibiotic = {
                description: description,
                dosage: dosage,
                startDate: startDate,
                endDate: endDate,
                status: status,
            }
            if (shouldInclude) {
                antibioticsArray.push(formattedAntibiotic);
            }
        }
            console.log("processed Medication Data: ", antibioticsArray);
        dispatch({type: "SET_MEDICATION_DATA", payload: antibioticsArray});
    }

}

//===================================================---SET CONDITION DATA---===========================================

// Initiates setting patient condition data
export const setConditionData = (payload) => {
    return (dispatch) => {
        dispatch(processConditionData(payload));
    }
}

export const processConditionData = (conditions) => {
    return (dispatch) => {
        let conditionArray = [];
        conditions.forEach(condition => {
            let description;
            let onsetDate;
            let verified;
            let status;

            try {
                description = condition.resource.code.text;
                onsetDate = condition.resource.onsetDateTime;
                if (onsetDate) {
                    onsetDate = new Date(condition.resource.onsetDateTime);
                }
                verified = condition.resource.verificationStatus.text;
                status = condition.resource.clinicalStatus.text;
            } catch (err) {

            }

            let disease = {
                description: description,
                onsetDate: onsetDate,
                verified: verified,
                status: status
            }
            conditionArray.push(disease);
        })
        conditionArray.sort((a, b) => {
            return Date.parse(b.onsetDate) - Date.parse(a.onsetDate);
        });
        dispatch({type: "SET_DISEASE_DATA", payload: conditionArray});
    }

}

//=======================================---SET PATIENT ALLERGY DATA---=================================================

// Sets patient allergy data
export const setAllergyData = (payload) => {
    return (dispatch) => {
        dispatch(processAllergyData(payload));
    }
}

// processes allergy data, filter and keep only antibiotic related allergies
export const processAllergyData = (payload) => {
    return async (dispatch) => {

        let allergyArray = [];

        let allergies = payload.allergies;


        for (let allergy of allergies) {
            let shouldInclude = false;
            let isMedication = "Unknown";
            if (allergy.resource.code) {
                let reaction;
                let date;
                let verification;
                let criticality;
                let clinicalStatus;
                let description;
                try {

                    if (allergy.resource.category) {
                        if (allergy.resource.category[0] === "medication") {
                            shouldInclude = true;
                            isMedication = true;
                        } else if (allergy.resource.category[0] !== "medication") {
                            shouldInclude = false;
                            isMedication = false;
                        }
                    }


                    if (allergy.resource.code.text) {
                        description = allergy.resource.code.text;

                        // try to parse description to extract a medication name, if any
                        if (!shouldInclude && (isMedication === "Unknown")) {
                            let parsedMedication;
                            try {
                                parsedMedication = await medicationParser(allergy.resource.code.text);
                                console.log("allergy text: ", description);
                                console.log("parsed allergy: ", parsedMedication);
                            } catch (error) {
                                console.error(error);
                                // error fail safe
                                shouldInclude = true;
                            }

                            // if we were able to parse the medication name, we call inferRxNorm to find the closest
                            // matching rxNorm concept and code
                            if (parsedMedication && !shouldInclude) {
                                for (let entity of parsedMedication.Entities) {
                                    if (entity.Category === "MEDICATION") {
                                        shouldInclude = true;
                                    }
                                }
                            }
                        }

                    }




                    if (allergy.resource.reaction) {
                        reaction = {
                            reaction: allergy.resource.reaction[0].manifestation[0].text,
                            severity: allergy.resource.reaction[0].severity
                        }
                    }


                    if (allergy.resource.recordedDate) {
                        date = allergy.resource.recordedDate;
                    }


                    if (allergy.resource.verificationStatus) {
                        verification = allergy.resource.verificationStatus.coding[0].code;
                    }


                    if (allergy.resource.criticality) {
                        criticality = allergy.resource.criticality;
                    }


                    if (allergy.resource.clinicalStatus) {
                        clinicalStatus = allergy.resource.clinicalStatus.coding[0].code;
                    }



                } catch (err) {

                }

                let formattedAllergy = {
                    clinicalStatus: clinicalStatus,
                    description: description,
                    criticality: criticality,
                    reaction: reaction,
                    date: date,
                    verification: verification
                }

                // add allergy to array
                if (shouldInclude) {
                    allergyArray.push(formattedAllergy);
                }
            }

        }

        try {
            allergyArray.sort((a,b) => {
                return Date.parse(b.date) - Date.parse(a.date);
            });
        } catch (err) {

        }


        dispatch({type: "SET_ALLERGY_DATA", payload: allergyArray});
    }
}