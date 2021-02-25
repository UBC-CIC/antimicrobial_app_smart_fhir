
const initialPatientState = {
    currentPatient: null,
    allergies: null,
    antibiotics: null,
    diseases: null,
    resistantOrganisms: null,
    procedures: [],
    imaging: [],
    consults: [],
    graphingData: {
        temperature: [],
        bloodPressure: [],
        oxygenSaturation: [],
        oxygenMode: [],
        heartRate: [],
        respiratoryRate: [],
        crp: [],
        wbc: [],
        procalcitonin: []
    },
    graphToDisplay: null,
    graphDataStartDate: new Date("2000-01-01T00:00:00.000Z"),
    graphDataEndDate: new Date(),
    rawData: {
        allergies: [],
        medications: [],
        observations: [],
        conditions: [],
        procedures: [],
        diagnosticReports: []
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

// determines observation type based on given codes
// currently only LOINC codes are tested
const observationFilterHelper = (code) => {

  let codeUnitArray = code.coding;

  for (let entry of codeUnitArray) {

      switch (entry.code) {
          case "364537001": // Skin temperature [SNOMED]
          case "386725007": // Body temperature [SNOMED]
          case "415945006": // Oral temperature [SNOMED]
          case "703421000": // Temperature [SNOMED]
          case "8310-5": {  // Temperature [LOINC]
              return "temperature";
          }
          case "442349007": // Venous oxygen saturation [SNOMED]
          case "431314004": // Peripheral oxygen saturation [SNOMED]
          case "442386008": // Jugular bulb oxygen saturation [SNOMED]
          case "442381003": // Intracardiac oxygen saturation [SNOMED]
          case "373638005": // Conjunctival oxygen saturation [SNOMED]
          case "718059008": // Cerebral oxygen saturation [SNOMED]
          case "442440005": // Capillary oxygen saturation [SNOMED]
          case "442476006": // Arterial oxygen saturation [SNOMED]
          case "103228002": // Hemoglobin saturation with oxygen [SNOMED]
          case "2710-2": {  // Oxygen Saturation [LOINC]
              return "oxygen saturation";
          }
          case "444981005": // Resting heart rate [SNOMED]
          case "364075005": // Heart rate [SNOMED]
          case "8867-4": {  // Heart Rate [LOINC]
              return "heart rate";
          }
          case "86290005": // Respiratory rate [SNOMED]
          case "9279-1": { // Respiratory rate [LOINC]
              return "respiratory rate";
          }
          case "314463006": // 24 hour blood pressure [SNOMED]
          case "163033001": // Lying blood pressure [SNOMED]
          case "251076008": // Cuff blood pressure [SNOMED]
          case "75367002":  // Blood pressure [SNOMED]
          case "55284-4": { // Blood pressure [LOINC]
              return "blood pressure";
          }
          case "270980008": // Plasma C-reactive protein measurement [SNOMED]
          case "135842001": // Serum C reactive protein level [SNOMED]
          case "711357009": // Measurement of C-reactive protein using high sensitivity technique [SNOMED]
          case "1988-5":    // C reactive protein [Mass/volume] in Serum or Plasma [LOINC]
          case "30522-7": { // C reactive protein [Mass/volume] in Serum or Plasma by High sensitivity method [LOINC]
              return "crp";
          }
          case "391558003": // Total white blood cell count [SNOMED]
          case "116786000": // Leukocyte count corrected for nucleated erythrocytes [SNOMED]
          case "42396003":  // White blood cell estimate [SNOMED]
          case "767002":    // White blood cell count [SNOMED]
          case "33256-9":   // Leukocytes [#/volume] corrected for nucleated erythrocytes in Blood by Automated count [LOINC]
          case "33765-9":   // Leukocytes [#/volume] in Blood Product unit.platelet pheresis by Automated count [LOINC]
          case "804-5":     // Leukocytes [#/volume] in Blood by Manual count [LOINC]
          case "26466-3":   // Leukocytes [#/volume] in Body fluid [LOINC]
          case "6690-2":    // Leukocytes [#/volume] in Blood by Automated count [LOINC]
          case "26464-8": { // Leukocytes [#/volume] in Blood [LOINC]
              return "wbc";
          }
          case "418752001": // Procalcitonin [SNOMED]
          case "75241-0":   // Procalcitonin [Mass/volume] in Serum or Plasma by Immunoassay [LOINC]
          case "33959-8": { // Procalcitonin [Mass/volume] in Serum or Plasma [LOINC]
              return "procalcitonin"
          }
          default:
              break;
      }

  }

  return "other";
}


const setObservationDataHelper = (observations) => {
    let temperatureData = [];
    let bloodPressureData = [];
    let oxygenSaturationData = [];
    let oxygenModeData = [];
    let heartRateData = [];
    let respiratoryRateData = [];
    let crpData = [];
    let wbcData = [];
    let procalcitoninData = [];

    observations.forEach(observation => {

        let codeType = observationFilterHelper(observation.resource.code);

        switch (codeType) {
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
            case "oxygen saturation": {
                let oxygenSatEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                oxygenSaturationData.push(oxygenSatEntry);
                break;
            }
            case "heart rate": {
                let heartRateEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                heartRateData.push(heartRateEntry);
                break;
            }
            case "respiratory rate": {
                let respiratoryRateEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                respiratoryRateData.push(respiratoryRateEntry);
                break;
            }
            case "crp": {
                let crpEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                crpData.push(crpEntry);
                break;
            }
            case "wbc": {
                let wbcEntry = {
                    timestamp: observation.resource.effectiveDateTime,
                    unit: observation.resource.valueQuantity.unit,
                    value: observation.resource.valueQuantity.value
                }
                wbcData.push(wbcEntry);
                break;
            }
            default:
                break;
        }
    });
    return {
        temperature: temperatureData,
        bloodPressure: bloodPressureData,
        oxygenSaturation: oxygenSaturationData,
        oxygenMode: oxygenModeData,
        heartRate: heartRateData,
        respiratoryRate: respiratoryRateData,
        crp: crpData,
        wbc: wbcData,
        procalcitonin: procalcitoninData
    }
}

const setDefaultGraph = (graphData) => {

    if (graphData.temperature.length > 0) {
        return "temperature";
    } else if (graphData.bloodPressure.length > 0) {
        return "bloodPressure";
    } else if (graphData.heartRate.length > 0) {
        return "heartRate";
    } else if (graphData.respiratoryRate.length > 0) {
        return "respiratoryRate";
    } else if (graphData.wbc.length > 0) {
        return "wbc"
    } else if (graphData.crp.length > 0) {
        return "crp"
    } else if (graphData.procalcitonin.length > 0) {
        return "procalcitonin";
    } else if (graphData.oxygenSaturation.length > 0) {
        return "oxygenSaturation";
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
            return {
                ...newPatientState,
                graphDataStartDate: action.payload,
            }
        }
        case "SET_GRAPH_DATA_END_DATE": {
            return {
                ...newPatientState,
                graphDataEndDate: action.payload,
            }
        }
        case "SET_ORGANISM_DATA": {
            return {
                ...newPatientState,
                resistantOrganisms: action.payload,
            }
        }
        case "SET_RAW_DATA": {
            return {
                ...newPatientState,
                rawData: {
                    allergies: action.payload.allergies,
                    medications: action.payload.medications,
                    observations: action.payload.observations,
                    conditions: action.payload.conditions,
                    procedures: action.payload.procedures,
                    diagnosticReports: action.payload.diagnosticReports
                }
            }
        }
        case "SET_PROCEDURE_DATA": {
            return {
                ...newPatientState,
                procedures: action.payload,
            }
        }
        default:
            return newPatientState;
    }

};

export default patientStateReducer;