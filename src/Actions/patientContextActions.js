import medicationIdentifier from "../Services/medicationIdentifier";
import medicationParser from "../Services/medicationParser";
const axios = require('axios');



//=====================================---SET PATIENT DATA---========================================

// Sets basic patient information
export const setPatientData = (payload) => {
    return {
        type: "SET_PATIENT_DATA",
        payload: payload,
    }
}

// Sets patient allergy data
export const setAllergyData = (payload) => {
    return {
        type: "SET_ALLERGY_DATA",
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

//=====================================---PROCESS MEDICATION DATA---========================================

// Initiates setting patient medication data
export const setMedicationData = (payload) => {
    return (dispatch) => {
        dispatch(processMedicationData(payload));
    }
}

// Processes patient medication data
export const processMedicationData = (medication) => {
    return async (dispatch) => {
        let antibioticsArray = [];

        for (let medicine of medication) {
            let shouldInclude = false;
            console.log("input: ", medicine.resource.medicationCodeableConcept.text);
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
                        console.log("parserOutput: ", entity.Text);
                    } else if ((entity.Category === "MEDICATION") && (entity.Score <= 0.75)) {
                        shouldInclude = true;
                    }
                }
            }
            console.log("rxNorm result: ", result);
            let rxNormPrediction = null;
            if (result && !shouldInclude) {
                if (result.Entities.length > 0) {
                    rxNormPrediction = {
                        prediction: result.Entities[0].RxNormConcepts[0].description,
                        code: result.Entities[0].RxNormConcepts[0].Code,
                        confidence: result.Entities[0].RxNormConcepts[0].Score
                    }
                    // if our confidence in our closest matching RxNorm concept value is low,
                    // include the medication in the result as a fail safe
                    if (result.Entities[0].RxNormConcepts[0].Code < 0.60) {
                        shouldInclude = true;
                    }
                }
            }
            // check the RxNorm database for property codes for our chosen RxConcept
            // check for ATC and MESH properties for validation
            let rxNormResponse;
            if (rxNormPrediction && !shouldInclude) {
                try {
                    let linkEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/${rxNormPrediction.code}/allProperties.json?prop=names+codes`;
                    rxNormResponse = await axios.get(linkEndpoint);
                    let atc = [];
                    let mesh;
                    if (rxNormResponse) {
                        let properties = rxNormResponse.data.propConceptGroup.propConcept;
                        if (properties.length > 0) {
                            for (let i = 0; i < Math.min(properties.length - 1, 20); i++) {
                                if (properties[i].propName === "ATC") {
                                    atc.push(properties[i].propValue);
                                }
                                if (properties[i].propName === "MESH") {
                                    mesh = properties[i].propValue;
                                }
                            }
                        }
                    }
                    // check if were able to retrieve ATC codes and if it's an antibiotic (starts with "J")
                    if ((atc.length !== 0) && !shouldInclude) {
                        atc.forEach(entry => {
                            if (entry.startsWith("J")) {
                                shouldInclude = true;
                            }
                        })
                    }
                    // if we don't have an atc, check if we were able to retrieve a MESH value (Medical Subject Heading)
                    // then check if mesh includes any relevant keywords
                    if (mesh && !shouldInclude) {
                        let meshResponse = await axios.get(`https://id.nlm.nih.gov/mesh/lookup/qualifiers?descriptor=${mesh}`);
                        if (meshResponse) {
                            console.log("mesh Code:", mesh);
                            let qualifiers = ["immunology"];
                            if (meshResponse.data.length > 0) {
                                meshResponse.data.forEach(quality => {
                                    if (qualifiers.includes(quality.label)) {
                                        shouldInclude = true;
                                    }
                                })
                            }
                        }
                    }

                } catch (error) {
                    console.error(error);
                }
            }

            let startDate = null;
            let endDate = null;
            let length = null;
            let supplyDurationUnit = null;
            let supplyDurationValue = null;
            let description = null;
            let durationUnit = null;
            let durationValue = null;
            let type = null;
            let dosage = null;
            let status = null;
            try {
                if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                    startDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start);
                    length = medicine.resource.dosageInstruction[0].length;
                    supplyDurationUnit = medicine.resource.dispenseRequest.expectedSupplyDuration.code;
                    supplyDurationValue = medicine.resource.dispenseRequest.expectedSupplyDuration.value;
                }

                if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end) {
                    endDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end);
                }

                if (!startDate) {
                    startDate = new Date(medicine.resource.authoredOn);
                }

            } catch (error) {

            }


            try {
                description = medicine.resource.medicationCodeableConcept.text;
                durationUnit = medicine.resource.dispenseRequest.expectedSupplyDuration.unit;
                durationValue = medicine.resource.dispenseRequest.expectedSupplyDuration.value;
                type = medicine.resource.dispenseRequest.quantity.unit;
                dosage = medicine.resource.dosageInstruction[0].text;
                status = medicine.resource.status;
            } catch (error) {

            }

            if (!endDate && startDate && length && supplyDurationValue) {
                // calculate duration of medication regime to estimate endDate
                let medicationLengthValue = length * supplyDurationValue;
                if (supplyDurationUnit === "d") {
                    let date = new Date(startDate);
                    date.setDate(date.getDate() + medicationLengthValue);
                    endDate = date;
                }
            }


            let formattedAntibiotic = {
                description: description,
                rxNormPrediction: rxNormPrediction,
                duration: {
                    unit: durationUnit,
                    value: durationValue
                },
                type: type,
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
        console.log("processed Diseas data: ", conditionArray);
        dispatch({type: "SET_DISEASE_DATA", payload: conditionArray});
    }

}