import './App.css';
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag, setTGT} from "./Actions/appStateActions";
import generateTGT from "./Services/UMLS/generateTGT";
import 'semantic-ui-css/semantic.min.css';
const axios = require('axios');
require('dotenv').config()




class App extends React.Component {
    _isMounted;

  constructor(props) {
    super(props);
    this.state = {
        patient: null,
    }
  }

  async componentDidMount() {
      this._isMounted = true;
      const {client, setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData, setLoadingFlag, unsetLoadingFlag, setTGT} = this.props;
      try {
          setLoadingFlag();
          let tgt;
          try {
              tgt = await generateTGT();
              setTGT(tgt);

              /*let linkRXEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/309114/allProperties.json?prop=names+codes`;
              let rxNormResponse = await axios.get(linkRXEndpoint);

              console.log("rxNormResponse Test: ", rxNormResponse);

              let linkATCEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/309114/property.json?propName=ATC`;
              let rxNormResponseATC = await axios.get(linkATCEndpoint);

              console.log("rxNormResponseATC Test: ", rxNormResponseATC);

              let linkMESHEndpoint = `https://rxnav.nlm.nih.gov/REST/rxcui/309114/property.json?propName=MESH`;
              let rxNormResponseMESH = await axios.get(linkMESHEndpoint);

              console.log("rxNormResponseMESH Test: ", rxNormResponseMESH);*/



          } catch (e) {
              console.error("Error retrieving UMLS token: ", e);
          }

          let patient = await client.patient.read();
          setPatientData(patient);
          let observation;
          try {
              observation = await client.patient.request("Observation", {pageLimit: 0});
          } catch (e) {
              console.log("Fetching Observation Resource failed: ", e);
          }
          if (observation) {
              if (observation.length > 0) {
                  let observationArray= [];
                  for (let array of observation) {
                      if (array.entry) {
                          if (array.entry.length > 0) {
                              array.entry.forEach(observed => {
                                  observationArray.push(observed);
                              })
                          }
                      }
                  }
                  setObservationData(observationArray);
              }
          }
          let allergy;
          try {
              allergy = await client.patient.request("AllergyIntolerance", {pageLimit: 0});
          } catch (e) {
              console.log("Fetching AllergyIntolerance Resource failed: ", e);
          }
          if (allergy) {
              if (allergy.length > 0) {
              let allergyArray = [];
              for (let array of allergy) {
                  if (array.entry) {
                      if (array.entry.length > 0) {
                          array.entry.forEach(item => {
                              allergyArray.push(item);
                          })
                      }
                  }
              }
                  setAllergyData({allergies: allergyArray, tgt: tgt});
              }
          }

         let medication;
         try {
             medication = await client.patient.request("MedicationRequest", {pageLimit: 0});
         } catch (e) {
             console.log("Fetching MedicationRequest Resource failed: ", e);
         }
          if (medication) {
              if (medication.length > 0) {
              let medicationArray = [];
              for (let array of medication) {
                  if (array.entry) {
                      if (array.entry.length > 0) {
                          array.entry.forEach(item => {
                              medicationArray.push(item);
                          })
                      }
                  }
              }
                  setMedicationData({medications: medicationArray, tgt: tgt});
              }
          }
         let diagnosticReports;
         try {
             diagnosticReports = await client.patient.request("DiagnosticReport", {pageLimit: 0});
         } catch (e) {
             console.log("Fetching DiagnosticReport Resource failed: ", e);
         }
          if (diagnosticReports) {
              if (diagnosticReports.length > 0) {
                  let diagnosticReportArray = [];
                  for (let array of diagnosticReports) {
                      if (array.entry) {
                          if (array.entry.length > 0) {
                              array.entry.forEach(item => {
                                  diagnosticReportArray.push(item);
                              })
                          }
                      }
                  }
              }

          }
          let conditions;
          try {
              conditions =  await client.patient.request("Condition", {pageLimit: 0});
          } catch (e) {
              console.log("Fetching Condition Resource failed: ", e);
          }
          if (conditions) {
              if (conditions.length > 0) {
                  let conditionArray = [];
                  for (let array of conditions) {
                      if (array.entry.length > 0) {
                          array.entry.forEach(item => {
                              conditionArray.push(item);
                          })
                      }
                      }
                  setConditionData(conditionArray);
                  }

              }


          console.log("patient: ", patient);
          console.log("observations: ", observation);
          console.log("allergies: ", allergy);
          console.log("medications: ", medication);
          console.log("diagnostic reports: ", diagnosticReports);
          console.log("conditions: ", conditions);

          if (this._isMounted) {
              this.setState({
                  patient: patient,
              })
          }
          unsetLoadingFlag();
      } catch (err) {
          console.error("Error requesting FHIR resources: ", err);
      }
  }

  componentWillUnmount() {
      this._isMounted = false;
  }

    render() {
      const {client, isLoadingData} = this.props;
      const {patient} = this.state;
      let name = "";
      if (patient) {
          name = patient.name[0].given[0] + " " + patient.name[0].family;

          if (patient.name[0].prefix) {
              name =  patient.name[0].prefix[0] + " " + name;
          }
      }


  return (
      <ApplicationBase locale={"en"}>
          <div className="App" style={{height: "100vh", width: "100vw", backgroundColor: "#f2f8fc"}}>
              {(isLoadingData)? <ApplicationLoadingOverlay isOpen={isLoadingData} /> :
                  <BrowserRouter>
                      <PageContainer client={client} name={name} />
                  </BrowserRouter>
              }
          </div>
      </ApplicationBase>
  );
}

}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.appState.loadingPatientData,
    };
};


const mapDispatchToProps = {
    setPatientData,
    setAllergyData,
    setLoadingFlag,
    unsetLoadingFlag,
    setMedicationData,
    setObservationData,
    setConditionData,
    setTGT
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
