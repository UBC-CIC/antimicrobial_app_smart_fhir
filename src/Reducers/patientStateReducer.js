const initialPatientState = {
    currentPatient: null,
    allergies: null,
}


const setPatientData = (patient) => {
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

const setAllergyData = (allergies) => {
    let allergyArray = [];

    allergies.forEach(allergy => {
        if (allergy.resource.category[0] === "medication") {
            let reaction = null;
            let date;
            if (allergy.resource.reaction) {
                reaction = {
                    reaction: allergy.resource.reaction[0].manifestation[0].text,
                    severity: allergy.resource.reaction[0].severity
                }
            }

            if (allergy.resource.recordedDate) {
                date = allergy.resource.recordedDate;
            } else {
                date = allergy.resource.meta.lastUpdated;
            }

            let formattedAllergy = {
                category: allergy.resource.category[0],
                clinicalStatus: allergy.resource.clinicalStatus.coding[0].code,
                description: allergy.resource.code.text,
                criticality: allergy.resource.criticality,
                reaction: reaction,
                date: date,
                verification: allergy.resource.verificationStatus.coding[0].code
            }
            allergyArray.push(formattedAllergy);
        }
    })

    allergyArray.sort((a,b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return allergyArray;
}


const patientStateReducer = (patientState = initialPatientState, action) => {

    let newPatientState = patientState;

    switch(action.type) {
        case "SET_PATIENT_DATA": {
            return {
                ...newPatientState,
                currentPatient: setPatientData(action.payload)
            }
        }
        case "SET_ALLERGY_DATA": {
            return {
                ...newPatientState,
                allergies: setAllergyData(action.payload)
            }
        }
        default:
            return newPatientState;
    }

};

export default patientStateReducer;