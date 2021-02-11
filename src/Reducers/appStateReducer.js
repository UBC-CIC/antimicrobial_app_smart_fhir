const initialAppState = {
    loadingPatientData: false,
    error: false,
    tgt: null,
}


const appStateReducer = (appState = initialAppState, action) => {

    let newAppState = appState;

    switch(action.type) {
        case "SET_LOADING_FLAG": {
            return {
                ...newAppState,
                loadingPatientData: true,
            }
        }
        case "UNSET_LOADING_FLAG": {
            return {
                ...newAppState,
                loadingPatientData: false,
            }
        }
        case "SET_TGT": {
            return {
                ...newAppState,
                tgt: action.payload,
            }
        }
        case "SET_ERROR_FLAG": {
            return {
                ...newAppState,
                error: true,
            }
        }
        default:
            return newAppState;
    }
};

export default appStateReducer;