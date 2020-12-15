import { combineReducers } from "redux";
import patientStateReducer from "./patientStateReducer";
import appStateReducer from "./appStateReducer";


export default combineReducers({
    patientData: patientStateReducer,
    appState: appStateReducer,
});