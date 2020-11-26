import { combineReducers } from "redux";
import patientStateReducer from "./patientStateReducer";
import appStateReducer from "./appStateActions";


export default combineReducers({
    patientData: patientStateReducer,
    appState: appStateReducer,
});