import './App.css';
import React from "react";
import { connect } from "react-redux";
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag} from "./Actions/appStateActions";
import medicationIdentifier from "./Services/medicationIdentifier";
import medicationParser from "./Services/medicationParser";
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
      const {client, setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData, setLoadingFlag, unsetLoadingFlag} = this.props;
      try {
          setLoadingFlag();
          let patient = await client.patient.read();
          setPatientData(patient);
          let observation = await client.patient.request("Observation");

          if (observation.entry) {
              if (observation.entry.length > 0) {
                  setObservationData(observation.entry)
              }
          }
          let allergy = await client.patient.request("AllergyIntolerance");

          if (allergy.entry) {
              if (allergy.entry.length > 0) {
                  setAllergyData(allergy.entry);
              }
          }
          let medication = await client.patient.request("MedicationRequest");
          if (medication.entry) {
              if (medication.entry.length > 0) {
                  setMedicationData(medication.entry);
              }
          }
          let diagnosticReports = await client.patient.request("DiagnosticReport");
          if (diagnosticReports.entry) {
              if (diagnosticReports.entry.length > 0) {

              }
          }
          let conditions =  await client.patient.request("Condition");
          if (conditions.entry) {
              if (conditions.entry.length > 0) {
                  setConditionData(conditions.entry);
              }
          }
          const response = await axios.get("http://id.nlm.nih.gov/mesh/D009761.json");
          console.log("mesh API lookup: ", response);
         /* try {
              const response = await axios.get('https://api.fda.gov/drug/drugsfda.json?api_key=nVYFrg4BHjZnjQqXjIbjWZprMDvdX2Fz38tyDDje&search=openfda.rxcui.exact:29046');
              console.log("openFDA: ", response);
          } catch (error) {
              console.error(error);
          }*/

          //console.log("rexResult", rexResult);
          console.log("patient: ", patient);
          console.log("observations: ", observation);
          console.log("allergies: ", allergy);
          console.log("medications: ", medication);
          console.log("diagnostic reports: ", diagnosticReports);
          console.log("conditions: ", conditions);
          /*let result = await medicationIdentifier("penicillin G");
          let resultTwo = await medicationParser("penicillin G");
          console.log("test identifier input: penicillin");
          console.log("test identifier output: ", result);
          console.log("test parser input: penicillin");
          console.log("test parser output: ", resultTwo);*/
          if (this._isMounted) {
              this.setState({
                  patient: patient,
              })
          }
          unsetLoadingFlag();
      } catch (err) {
          console.log("Error requesting FHIR resources: ", err);
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
                  <PageContainer client={client} name={name} />
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
    setConditionData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
