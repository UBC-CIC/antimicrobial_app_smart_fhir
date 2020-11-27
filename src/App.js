import './App.css';
import React from "react";
import { connect } from "react-redux";
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import PageContainer from "./Views/PageContainer/PageContainer";
import {setPatientData, setAllergyData} from "./Actions/patientContextActions";
import {setLoadingFlag, unsetLoadingFlag} from "./Actions/appStateActions";
import 'semantic-ui-css/semantic.min.css';




class App extends React.Component {
    _isMounted;

  constructor(props) {
    super(props);
    this.state = {
        patient: null,
        allergies: null,
    }
  }

  async componentDidMount() {
      this._isMounted = true;
      const {client, setPatientData, setAllergyData, setLoadingFlag, unsetLoadingFlag} = this.props;
      try {
          setLoadingFlag();
          let patient = await client.patient.read();
          setPatientData(patient);
          let observation = await client.patient.request("Observation");
          let allergy = await client.patient.request("AllergyIntolerance");
          if (allergy.entry.length > 0) {
              setAllergyData(allergy.entry);
          }
          console.log("patient: ", patient);
          console.log("observation: ", observation);
          console.log("allergy: ", allergy);
          if (this._isMounted) {
              this.setState({
                  patient: patient,
                  allergies: allergy,
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
          <div className="App" style={{height: "100vh", width: "100vw"}}>
              {(isLoadingData)? <ApplicationLoadingOverlay isOpen={isLoadingData} /> :
                  <PageContainer client={client} name={name} patient={patient}/>
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
    unsetLoadingFlag
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
