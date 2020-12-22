import './App.css';
import React from "react";
import { connect } from "react-redux";
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData, setMedicationData, setObservationData, setConditionData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag, setTGT} from "./Actions/appStateActions";
import medicationIdentifier from "./Services/ComprehendMedical/medicationIdentifier";
import medicationParser from "./Services/ComprehendMedical/medicationParser";
import generateTGT from "./Services/UMLS/generateTGT";
import generateUMLSToken from "./Services/UMLS/generateUMLSToken";
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
          } catch (e) {
              console.error("Error retrieving UMLS token: ", e);
          }

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
                  setMedicationData({medications: medication.entry, tgt: tgt});
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
    setConditionData,
    setTGT
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
