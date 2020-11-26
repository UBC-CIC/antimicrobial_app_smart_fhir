import { combineReducers } from "redux";
import patientStateReducer from "./patientStateReducer";


export default combineReducers({
    patientData: patientStateReducer,
});