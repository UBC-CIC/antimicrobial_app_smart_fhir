import './App.css';
import React from "react";

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
      const {client} = this.props;
      try {
          let patient = await client.patient.read();
          let observation = await client.patient.request("Observation");
          let allergy = await client.patient.request("AllergyIntolerance");
          console.log("patient: ", patient);
          console.log("observation: ", observation);
          console.log("allergy: ", allergy);
          if (this._isMounted) {
              this.setState({
                  patient: patient,
              })
          }
      } catch (err) {
          console.log("Error requesting FHIR resources: ", err);
      }
  }

  componentWillUnmount() {
      this._isMounted = false;
  }

    render() {
  return (
      <div className="App">
        <div>SMART ON FHIR LAUNCH SUCCESSFUL</div>
      </div>
  );
}

}

export default App;
