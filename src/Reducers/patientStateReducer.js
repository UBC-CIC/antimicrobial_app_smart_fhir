
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
    graphDataStartDate: new Date("2000-01-01T00:00:00.000Z"),
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


const setObservationDataHelper = (observations) => {
    let temperatureData = [];
    let bloodPressureData = [];

    observations.forEach(observation => {

        switch (observation.resource.code.text.toLowerCase()) {
            case "temperature": {
                let temperatureEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                temperatureData.push(temperatureEntry);
                break;
            }
            case "blood pressure": {
                let components = observation.resource.component;
                components.forEach( entry => {
                    let bloodPressureEntry = {
                        timestamp: observation.resource.effectiveDateTime,
                        type: entry.code.text.toLowerCase(),
                        code: entry.code.coding[0].code,
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
                allergies: action.payload,
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
            console.log("new time: ", action.payload);
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