import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import TemperatureGraph from "./Graphs/Temperature/TemperatureGraph";
import BloodPressureGraph from "./Graphs/BloodPressure/BloodPressureGraph";
import "./GraphView.css";



const GraphView = (props) => {
    const {isLoadingData, selectedGraph} = props;
    const [graphToDisplay, setGraph] = useState(selectedGraph);

    useEffect(() => {
        setGraph(selectedGraph);
    }, [selectedGraph]);

    let graph;
    switch (graphToDisplay) {
        case "temperature": {
            graph = <TemperatureGraph />;
            break;
        }
        case "bloodPressure": {
            graph = <BloodPressureGraph />;
            break;
        }
        default:
            break;
    }

    return(
        <Grid>
        <Grid.Row>
            <Grid.Column style={{marginLeft: "15px", marginRight: "15px"}}>
                <Grid style={{backgroundColor: "white", borderRadius: "8px", filter: "drop-shadow(0 1px 0.15rem lightgrey)"}}>
                    <Grid.Row className={"graphViewHeader"}>
                        <Grid.Column textAlign={"left"} verticalAlign={"middle"} style={{marginLeft: "2.00%"}}>
                            <span className={"graphViewTitle"}><strong>Graph View</strong></span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                            {(!isLoadingData)? graph : null }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.appState.loadingPatientData,
        selectedGraph: state.patientData.graphToDisplay,
    };
};

export default connect(mapStateToProps, null) (GraphView);