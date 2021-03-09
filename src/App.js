import './App.css';
import React from "react";
import { connect } from "react-redux";
import {Hub} from "aws-amplify";
import { BrowserRouter } from 'react-router-dom';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData, setRawData,
    setDiagnosticData, setProcedureData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag, setTGT, setErrorFlag} from "./Actions/appStateActions";
import {updateLoginState} from "./Actions/loginActions";
import {Grid} from "semantic-ui-react";
import Login from "./Components/Authentication/Login";
import generateTGT from "./Services/UMLS/generateTGT";
import Patient1 from "./Assets/Data/PatientOne/Patient";
import AllergyIntolerance1 from "./Assets/Data/PatientOne/AllergyIntolerance";
import MedicationRequest1 from "./Assets/Data/PatientOne/MedicationRequest";
import Observation1 from "./Assets/Data/PatientOne/Observation";
import 'semantic-ui-css/semantic.min.css';
require('dotenv').config()



class App extends React.Component {
    _isMounted;

  constructor(props) {
    super(props);
    this.state = {
        patient: null,
        currentLoginState: "signedOut"
    }
  }

  async componentDidMount() {
      this._isMounted = true;
      this.setAuthListener();
      const {client, setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData,
          setDiagnosticData, setProcedureData, setRawData, setLoadingFlag, unsetLoadingFlag, setTGT, setErrorFlag} = this.props;
      try {
          setLoadingFlag();
          let tgt;
          try {
              tgt = await generateTGT();
              setTGT(tgt);
          } catch (e) {
              console.error("Error retrieving UMLS token: ", e);
          }

          let patient = Patient1;
          setPatientData(patient);
          let observation = Observation1;
          let observationArray= [];
          if (observation) {
             if (observation.entry) {
                 if (observation.entry[0].length > 0) {
                     observation.entry[0].forEach(item => {
                         observationArray.push(item);
                     })
                     setObservationData(observationArray);
                 }
             }
          }
          let allergy = AllergyIntolerance1;
          let allergyArray = [];
          if (allergy) {
              if (allergy.entry) {
                  if (allergy.entry[0].length > 0) {
                      allergy.entry[0].forEach(item => {
                          allergyArray.push(item);
                      })
                      setAllergyData(allergyArray);
                  }
              }
              setAllergyData({allergies: allergyArray, tgt: tgt});
          }

         let medication = MedicationRequest1;
          let medicationArray = [];
          if (medication) {
              if (medication.entry) {
                  if (medication.entry[0].length > 0) {
                      medication.entry[0].forEach(item => {
                          medicationArray.push(item);
                      })
                  }
              }
              setMedicationData({medications: medicationArray, tgt: tgt});
          }
         let diagnosticReports;
          let diagnosticReportArray = [];
          if (diagnosticReports) {
              if (diagnosticReports.length > 0) {
                  for (let array of diagnosticReports) {
                      if (array.entry) {
                          if (array.entry.length > 0) {
                              array.entry.forEach(item => {
                                  diagnosticReportArray.push(item);
                              })
                          }
                      }
                  }
                  setDiagnosticData({diagnostics: diagnosticReportArray});
              }
          }
          let procedures;
          let proceduresArray = [];
          if (procedures) {
              if (procedures.length > 0) {
                  for (let array of procedures) {
                      if (array.entry) {
                          if (array.entry.length > 0) {
                              array.entry.forEach(item => {
                                  proceduresArray.push(item);
                              })
                          }
                      }
                  }
                  setProcedureData(proceduresArray);
              }

          }
          let conditions;
          let conditionArray = [];
          if (conditions) {
              if (conditions.length > 0) {
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

          setRawData({observations: observationArray, allergies: allergyArray,
                      medications: medicationArray, conditions: conditionArray, procedures: proceduresArray,
                      diagnosticReports: diagnosticReportArray});
         /* console.log("patient: ", patient);
          console.log("observations: ", observation);
          console.log("allergies: ", allergy);
          console.log("medications: ", medication);
          console.log("diagnostic reports: ", diagnosticReports);
          console.log("conditions: ", conditions);
          console.log("procedures: ", procedures);*/

          if (this._isMounted) {
              this.setState({
                  patient: patient,
              })
          }
          unsetLoadingFlag();
      } catch (err) {
          setErrorFlag();
          unsetLoadingFlag();
          console.error("Error requesting FHIR resources: ", err);
      }
  }

   setAuthListener = async () => {
      const {updateLoginState} = this.props;
        Hub.listen('auth', (data)=> {
            switch(data.payload.event) {
                case "signOut":
                    updateLoginState("signIn");
                    break;
                default:
                    break;
            }
        })
    }

  componentWillUnmount() {
      this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.loginState !== prevProps.loginState) {
          this.setState({
              currentLoginState: this.props.loginState,
          })
      }
  }

    render() {
      const {client, isLoadingData, errorOccurred} = this.props;
      const {patient} = this.state;
      let name = "";
      if (patient) {
          name = patient.name[0].given[0] + " " + patient.name[0].family;

          if (patient.name[0].prefix) {
              name =  patient.name[0].prefix[0] + " " + name;
          }
      }


  return (
      <ApplicationBase locale={"en"} style={{height: "100vh", width: "100vw"}}>
          {
              this.props.loginState !== "signedIn" && (
                  <div  className="App" style={{height: "100vh", width: "100vw"}}>
                      <Login animateTitle={false} type={"image"} title={"Antimicrobial Insights"} darkMode={false} />
                  </div>
              )
          }
          {
              this.props.loginState === "signedIn" && (
                  <div className="App" style={{height: "100vh", width: "100vw", backgroundColor: "#f2f8fc"}}>
                      {
                          (isLoadingData)? <ApplicationLoadingOverlay isOpen={isLoadingData} /> :
                              (errorOccurred)? <Grid style={{height: "100vh", width: "100vw", backgroundColor: "#f2f8fc"}}>
                                      <Grid.Row style={{height: "100vh", width: "100vw", backgroundColor: "#f2f8fc"}}>
                                          <Grid.Column verticalAlign={"middle"} textAlign={"center"}>
                                              <h1>Sorry, an error occurred while retrieving patient data from the server.</h1>
                                              <h1>Please refresh or re-launch the application.</h1>
                                          </Grid.Column>
                                      </Grid.Row>
                                  </Grid> :
                                  <BrowserRouter>
                                      <PageContainer client={client} name={name}/>
                                  </BrowserRouter>
                      }
                  </div>
              )
          }
      </ApplicationBase>
  );
}

}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.appState.loadingPatientData,
        errorOccurred: state.appState.error,
        loginState: state.loginState.currentState,
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
    setDiagnosticData,
    setProcedureData,
    setRawData,
    setTGT,
    setErrorFlag,
    updateLoginState,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
