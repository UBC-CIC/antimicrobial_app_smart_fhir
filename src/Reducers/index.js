import { combineReducers } from "redux";
import patientStateReducer from "./patientStateReducer";
import appStateReducer from "./appStateReducer";
import loginReducer from "./loginReducer";



export default combineReducers({
    patientData: patientStateReducer,
    appState: appStateReducer,
    loginState: loginReducer
});