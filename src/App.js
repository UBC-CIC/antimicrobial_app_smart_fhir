import './App.css';
import React from "react";
import { connect } from "react-redux";
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData, setMedicationData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag} from "./Actions/appStateActions";
import medicationIdentifier from "./Services/medicationIdentifier";
import 'semantic-ui-css/semantic.min.css';
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
      const {client, setPatientData, setAllergyData, setMedicationData, setLoadingFlag, unsetLoadingFlag} = this.props;
      try {
          setLoadingFlag();
          let patient = await client.patient.read();
          setPatientData(patient);
          let observation = await client.patient.request("Observation");
          let allergy = await client.patient.request("AllergyIntolerance");
          if (allergy.entry.length > 0) {
              setAllergyData(allergy.entry);
          }
          let medication = await client.patient.request("MedicationRequest");
          if (medication.entry.length > 0) {
                setMedicationData(medication.entry);
          }
          console.log("patient: ", patient);
          console.log("observation: ", observation);
          console.log("allergy: ", allergy);
          console.log("medication: ", medication);
          await medicationIdentifier("penicillin");
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
                  <PageContainer client={client} name={name}/>
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
    setMedicationData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
