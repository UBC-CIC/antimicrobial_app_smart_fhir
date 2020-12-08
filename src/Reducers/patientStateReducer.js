
const initialPatientState = {
    currentPatient: null,
    allergies: null,
    antibiotics: null,
    diseases: null,
    resistantOrganisms: null,
    graphingData: {
        temperature: null,
    }
}


const setPatientDataHelper = (patient) => {
    let prefix = null;
    if (patient.name[0].prefix) {
        prefix = patient.name[0].prefix[0];
    }
    let language = null;
    if (patient.communication) {
        language = patient.communication[0].language.text
    }
    return {
        id: patient.id,
        name: {
            prefix: prefix,
            first: patient.name[0].given[0],
            last: patient.name[0].family,
        },
        birthDate: patient.birthDate,
        gender: patient.gender,
        language: language,
    };
}

const setAntibioticsDataHelper = (antibiotics) => {
    let antibioticsArray = [];

    antibiotics.forEach(antibiotic => {

        let formattedAntibiotic = {
            description: antibiotic.resource.medicationCodeableConcept.text,
            duration: {
                unit: antibiotic.resource.dispenseRequest.expectedSupplyDuration.unit,
                value: antibiotic.resource.dispenseRequest.expectedSupplyDuration.value
            },
            type: antibiotic.resource.dispenseRequest.quantity.unit,
            dosage: antibiotic.resource.dosageInstruction[0].text,
            date: antibiotic.resource.meta.lastUpdated,
            status: antibiotic.resource.status,
        }

        antibioticsArray.push(formattedAntibiotic);
    })

    return antibioticsArray;
}

const setAllergyDataHelper = (allergies) => {
    let allergyArray = [];

    allergies.forEach(allergy => {
        if (allergy.resource.category[0] === "medication") {
            if (allergy.resource.code) {
                let reaction = null;
                if (allergy.resource.reaction) {
                    reaction = {
                        reaction: allergy.resource.reaction[0].manifestation[0].text,
                        severity: allergy.resource.reaction[0].severity
                    }
                }

                let date;
                if (allergy.resource.recordedDate) {
                    date = allergy.resource.recordedDate;
                } else {
                    date = allergy.resource.meta.lastUpdated;
                }

                let verification = "Unknown";
                if (allergy.resource.verificationStatus) {
                    verification = allergy.resource.verificationStatus.coding[0].code;
                }

                let criticality = "Unknown";
                if (allergy.resource.criticality) {
                    criticality = allergy.resource.criticality;
                }

                let clinicalStatus = "Unknown";
                if (allergy.resource.clinicalStatus) {
                    clinicalStatus = allergy.resource.clinicalStatus.coding[0].code;
                }

                let formattedAllergy = {
                    clinicalStatus: clinicalStatus,
                    description: allergy.resource.code.text,
                    criticality: criticality,
                    reaction: reaction,
                    date: date,
                    verification: verification
                }
                allergyArray.push(formattedAllergy);
            }
        }
    })

    allergyArray.sort((a,b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return allergyArray;
}


const setObservationDataHelper = (observations) => {
    let temperatureData = [];

    observations.forEach(observation => {

        if (observation.resource.code.text === "temperature") {

            let temperatureEntry = {
                timestamp: observation.resource.effectiveDateTime,
                unit: observation.resource.valueQuantity.unit,
                value: observation.resource.valueQuantity.value
            }
            temperatureData.push(temperatureEntry);
        }
    })

    return {
        temperature: temperatureData,
    }
}


const patientStateReducer = (patientState = initialPatientState, action) => {

    let newPatientState = patientState;

    switch(action.type) {
        case "SET_PATIENT_DATA": {
            return {
                ...newPatientState,
                currentPatient: setPatientDataHelper(action.payload)
            }
        }
        case "SET_ALLERGY_DATA": {
            return {
                ...newPatientState,
                allergies: setAllergyDataHelper(action.payload)
            }
        }
        case "SET_MEDICATION_DATA": {
            return {
                ...newPatientState,
                antibiotics: setAntibioticsDataHelper(action.payload)
            }
        }
        case "SET_OBSERVATION_DATA": {
            return {
                ...newPatientState,
                graphingData: setObservationDataHelper(action.payload)
            }
        }
        default:
            return newPatientState;
    }

};

export default patientStateReducer;