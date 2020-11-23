import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FHIR from "fhirclient";
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

const smart_on_fhir_launch = () => {
    // Initialize and authorize application (experimental)
    FHIR.oauth2
        .init({
            clientId: 'my_web_app',
            scope: 'patient/Observation.read patient/Patient.read launch/patient'
        })
        .then(client => {
            ReactDOM.render(<App client={client} />, root);
        });
};

smart_on_fhir_launch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
