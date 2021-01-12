import React, { useState }  from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import { Route, Switch} from 'react-router-dom';
import DataViewer from "../../../Components/DataViewer/DataViewer";
import StaticViewer from "../../../Components/StaticViewer/StaticViewer";


const PatientView = (props) => {

    return (
        <Grid.Row style={{paddingTop: "40px", width: "100vh", height: "100%"}}>
            <Grid.Column>
                <Grid.Row>
                    <Grid.Column>
                        <Switch>
                            <Route exact path={"/"} component={DataViewer}/>
                            <Route path={"/static"} component={StaticViewer}/>
                        </Switch>
                    </Grid.Column>
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