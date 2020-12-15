import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FHIR from "fhirclient";
import { applyMiddleware, createStore } from "redux";
import Amplify from 'aws-amplify';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import awsconfig from './aws-exports';
import reportWebVitals from './reportWebVitals';
import reducers from "./Reducers";
Amplify.configure(awsconfig);




const store = createStore(
    reducers, applyMiddleware(thunk)
);


const smart_on_fhir_launch = () => {
    // Initialize and authorize application
    FHIR.oauth2
        .init({
            clientId: '3aa58dbb-7bf0-47ab-82e7-8cf132a7fbc9',
            scope: "launch/patient"
            /*clientId: 'e0d5a347-4214-4b2b-aa3d-398e9da7573b',
            scope: 'patient/Observation.read patient/Patient.read patient/AllergyIntolerance.read patient/MedicationRequest.read patient/DiagnosticReport.read launch profile openid online_access'*/
        })
        .then(client => {
            ReactDOM.render(
                <Provider store={store}>
                    <App client={client} />
                </Provider>,
                document.getElementById('root')
            );
        });
};

smart_on_fhir_launch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
