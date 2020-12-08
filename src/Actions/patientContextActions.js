//===================================---SET PATIENT DATA---==========================================

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

// Sets patient medication data
export const setMedicationData = (payload) => {
    return {
        type: "SET_MEDICATION_DATA",
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

//====================================================================================================