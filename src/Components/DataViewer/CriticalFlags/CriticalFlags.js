import React from 'react';
import {connect} from "react-redux";
import {Divider, Grid, Loader, Button} from "semantic-ui-react";
import Flag from "./Flag/Flag";
import ModalManager from 'terra-application/lib/modal-manager';
import CreateEntry from "./CreateEntry/CreateEntry";
import "./CriticalFlags.css";

const CriticalFlags = (props) => {

    const {allergies, antibiotics, diseases} = props;
    let allergyList = [];
    if (allergies) {
        if (allergies.length > 0) {
            allergyList = allergies.map((allergy, index) => {
                return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{allergy.description}</div><Divider style={{padding: "0px"}} /></div>
            })
        } else {
            allergyList = <div key={1} style={{padding: "0px"}}><div style={{paddingTop: "10px"}}><span style={{fontSize: "18px"}}>None</span></div></div>
        }

    } else {
        allergyList = <div key={1} style={{padding: "0px"}}><div style={{padding: "0px"}}><Loader active inline='centered' size='small'><strong>Loading ...</strong></Loader></div></div>
    }

    let antibioticsList = [];
    if (antibiotics) {
        if (antibiotics.length > 0) {
            antibioticsList = antibiotics.map((antibiotic, index) => {
                return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{antibiotic.description}</div><Divider style={{padding: "0px"}} /></div>
            })
        } else {
            antibioticsList = <div key={1} style={{padding: "0px"}}><div style={{paddingTop: "10px"}}><span style={{fontSize: "18px"}}>None</span></div></div>
        }
    } else {
        antibioticsList = <div key={1} style={{padding: "0px"}}><div style={{padding: "0px"}}><Loader active inline='centered' size='small'><strong>Loading ...</strong></Loader></div></div>
    }

    let diseaseList = [];
    if (diseases) {
        if (diseases.length > 0) {
            diseaseList = diseases.map((disease, index) => {
                return <div key={index} style={{padding: "0px"}}><div style={{padding: "0px"}}>{disease.description}</div><Divider style={{padding: "0px"}} /></div>
            })
        } else {
            diseaseList = <div key={1} style={{padding: "0px"}}><div style={{paddingTop: "10px"}}><span style={{fontSize: "18px"}}>None</span></div></div>
        }
    } else {
        diseaseList = <div key={1} style={{padding: "0px"}}><div style={{padding: "0px"}}><Loader active inline='centered' size='small'><strong>Loading ...</strong></Loader></div></div>
    }


return(
    <Grid.Column  width={10}>
        <Grid className={"criticalFlagsContainer"} >
            <Grid.Row className={"criticalFlagsHeader"}>
                <Grid.Column textAlign={"left"} style={{marginLeft: "2.00%"}}>
                    <span className={"criticalFlagsTitle"}><strong>Critical Flags</strong></span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Grid>
                        <Grid.Row columns={3} style={{height: "80px !important", paddingBottom: "5px"}}>
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
                        <Grid.Row columns={3} style={{paddingTop: "0px", paddingBottom: "5px"}}>
                            <Grid.Column>
                                <ModalManager>
                                    <CreateEntry type={"disease"} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <CreateEntry type={"antibiotic"} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <CreateEntry type={"allergy"} />
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
    };
};

export default connect(mapStateToProps, null) (CriticalFlags);