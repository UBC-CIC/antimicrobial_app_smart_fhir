import './App.css';
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const {client} = this.props;
    console.log("client: ", client);
  return (
      <div className="App">
        <div>SMART ON FHIR LAUNCH SUCCESSFUL</div>
      </div>
  );
}

}

export default App;
