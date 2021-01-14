import React from 'react';
import {connect} from "react-redux";
import {Divider, Grid} from "semantic-ui-react";
import Flag from "./Flag/Flag";
import ModalManager from 'terra-application/lib/modal-manager';
import "./CriticalFlags.css";

const CriticalFlags = (props) => {

    const {allergies, antibiotics, diseases, organisms} = props;
    let allergyList = [];
    if (allergies) {
        allergyList = allergies.map((allergy, index) => {
            return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{allergy.description}</div><Divider style={{padding: "0px"}} /></div>
        })
    }
    let antibioticsList = [];
    if (antibiotics) {
        antibioticsList = antibiotics.map((antibiotic, index) => {
            return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{antibiotic.description}</div><Divider style={{padding: "0px"}} /></div>
        })
    }

    let diseaseList = [];
    if (diseases) {
        diseaseList = diseases.map((disease, index) => {
            return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{disease.description}</div><Divider style={{padding: "0px"}} /></div>
        })
    }

    let organismList = [];
    if (organisms) {
        organismList = organisms.map((organism, index) => {
            return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{organism.description}</div><Divider style={{padding: "0px"}} /></div>
        })
    }

return(
    <Grid.Column  width={12}>
        <Grid className={"criticalFlagsContainer"} >
            <Grid.Row className={"criticalFlagsHeader"}>
                <Grid.Column textAlign={"left"} style={{marginLeft: "2.00%"}}>
                    <span className={"criticalFlagsTitle"}><strong>Critical Flags</strong></span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Grid>
                        <Grid.Row columns={4} style={{height: "80px !important"}}>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <ModalManager>
                                    <Flag title={"Resistant Organisms:"} content={organismList} modalData={organisms} type={"organism"} alert={(organisms)?  (organisms.length > 0) : false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <ModalManager>
                                    <Flag title={"Diseases:"} content={diseaseList} modalData={diseases} type={"disease"} alert={(diseases)?  (diseases.length > 0) : false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <Flag title={"Recent Antibiotics:"} content={antibioticsList} modalData={antibiotics} type={"antibiotic"} alert={(antibiotics)?  (antibiotics.length > 0) : false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <Flag title={"Allergies:"} content={allergyList} modalData={allergies} type={"allergy"} alert={(allergies)? (allergies.length > 0) : false}  />
                                </ModalManager>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Grid.Column>
)


}

const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
        allergies: state.patientData.allergies,
        antibiotics: state.patientData.antibiotics,
        diseases: state.patientData.diseases,
        organisms: state.patientData.resistantOrganisms,
    };
};

export default connect(mapStateToProps, null) (CriticalFlags);