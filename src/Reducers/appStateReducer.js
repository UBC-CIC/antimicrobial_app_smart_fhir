const initialAppState = {
    loadingPatientData: false,
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
        default:
            return newAppState;
    }
};

export default appStateReducer;