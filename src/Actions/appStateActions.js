

// Sets app loadingFlag
export const setLoadingFlag = () => {
    return {
        type: "SET_LOADING_FLAG",
    }
}

// Unsets app loadingFlag
export const unsetLoadingFlag = () => {
    return {
        type: "UNSET_LOADING_FLAG",
    }
}

// Sets tgt
export const setTGT = (payload) => {
    return {
        type: "SET_TGT",
        payload: payload,
    }
}

// set error Flag
export const setErrorFlag = () => {
    return {
        type: "SET_ERROR_FLAG",
    }
}

// set selectedPatient
export const setSelectedPatient = (payload) => {
    return {
        type: "SET_SELECTED_PATIENT",
        payload: payload,
    }
}
