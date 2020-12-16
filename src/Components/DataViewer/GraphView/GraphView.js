import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import TemperatureGraph from "./Graphs/Temperature/TemperatureGraph";
import BloodPressureGraph from "./Graphs/BloodPressure/BloodPressureGraph";



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
        <Grid.Row columns={3}>
            <Grid.Column width={1} />
            <Grid.Column width={14} textAlign={"center"} verticalAlign={"middle"}>
                {(!isLoadingData)? graph : null }
            </Grid.Column>
            <Grid.Column width={1} />
        </Grid.Row>
            <Grid.Row>
                <Grid.Column>

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