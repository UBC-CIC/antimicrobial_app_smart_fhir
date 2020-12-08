import React, { useState } from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import TemperatureGraph from "./Graphs/Temperature/TemperatureGraph";
import BloodPressureGraph from "./Graphs/BloodPressure/BloodPressureGraph";



const GraphView = (props) => {
    const {isLoadingData} = props;
    return(
        <Grid>
        <Grid.Row columns={2}>
            <Grid.Column width={8}>
                {(!isLoadingData)? <TemperatureGraph /> : null }
            </Grid.Column>
            <Grid.Column width={8}>
                {(!isLoadingData)? <BloodPressureGraph /> : null}
            </Grid.Column>
        </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={8}>
                    {(!isLoadingData)? null : null }
                </Grid.Column>
                <Grid.Column width={8}>
                    {(!isLoadingData)? null : null}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.appState.loadingPatientData,
    };
};

export default connect(mapStateToProps, null) (GraphView);