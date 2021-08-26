import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

            ReactDOM.render(
                <Provider store={store}>
                    <App  />
                </Provider>,
                document.getElementById('root')
            )

};

smart_on_fhir_launch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
