
const initialPatientState = {
    currentPatient: null,
    allergies: null,
    antibiotics: null,
    diseases: null,
    resistantOrganisms: null,
    graphingData: {
        temperature: [],
        bloodPressure: [],
    },
    graphToDisplay: null,
    graphDataStartDate: "1900-01-01",
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

const setAllergyDataHelper = (allergies) => {
    let allergyArray = [];

    allergies.forEach(allergy => {
            if (allergy.resource.code) {
                let reaction;
                let date;
                let verification;
                let criticality;
                let clinicalStatus;
                let description;
                try {
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


                    if (allergy.resource.code.text) {
                        description = allergy.resource.code.text;
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
                allergyArray.push(formattedAllergy);
            }

    })

    try {
        allergyArray.sort((a,b) => {
            return Date.parse(b.date) - Date.parse(a.date);
        });
    } catch (err) {

    }

    return allergyArray;
}


const setObservationDataHelper = (observations) => {
    let temperatureData = [];
    let bloodPressureData = [];

    observations.forEach(observation => {

        switch (observation.resource.code.text) {
            case "temperature": {
                let temperatureEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                temperatureData.push(temperatureEntry);
                break;
            }
            case "Blood pressure": {
                let components = observation.resource.component;
                components.forEach( entry => {
                    let bloodPressureEntry = {
                        timestamp: observation.resource.effectiveDateTime,
                        type: entry.code.text,
                        unit: entry.valueQuantity.unit,
                        value: entry.valueQuantity.value
                    }
                    bloodPressureData.push(bloodPressureEntry);
                })
                break;
            }
            default:
                break;
        }
    });
    return {
        temperature: temperatureData,
        bloodPressure: bloodPressureData,
    }
}

const setDefaultGraph = (graphData) => {

    if (graphData.temperature.length > 0) {
        return "temperature";
    } else if (graphData.bloodPressure.length > 0) {
        return "bloodPressure";
    } else
        return null;

}


const patientStateReducer = (patientState = initialPatientState, action) => {

    let newPatientState = patientState;

    switch(action.type) {
        case "SET_PATIENT_DATA": {
            return {
                ...newPatientState,
                currentPatient: setPatientDataHelper(action.payload),
            }
        }
        case "SET_ALLERGY_DATA": {
            return {
                ...newPatientState,
                allergies: setAllergyDataHelper(action.payload),
            }
        }
        case "SET_MEDICATION_DATA": {
            return {
                ...newPatientState,
                antibiotics: action.payload,
            }
        }
        case "SET_OBSERVATION_DATA": {
            let newGraphingData = setObservationDataHelper(action.payload);
            let defaultGraph = setDefaultGraph(newGraphingData);
            return {
                ...newPatientState,
                graphingData: newGraphingData,
                graphToDisplay: defaultGraph,
            }
        }
        case "SET_DISEASE_DATA": {
            return {
                ...newPatientState,
                diseases: action.payload,
            }
        }
        case "SET_GRAPH_DISPLAY": {
            return {
                ...newPatientState,
                graphToDisplay: action.payload,
            }
        }
        case "SET_GRAPH_DATA_START_DATE": {
            return {
                ...newPatientState,
                graphDataStartDate: action.payload,
            }
        }
        default:
            return newPatientState;
    }

};

export default patientStateReducer;