import React, { useState }  from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import DataViewer from "../../../Components/DataViewer/DataViewer";


const PatientView = (props) => {

    return (
        <Grid.Row style={{paddingTop: "40px"}}>
            <Grid.Column>
                <Grid.Row>
                    <Grid.Column>
                        <DataViewer />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
    );
};

const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
    };
};

export default connect(mapStateToProps, null) (PatientView);