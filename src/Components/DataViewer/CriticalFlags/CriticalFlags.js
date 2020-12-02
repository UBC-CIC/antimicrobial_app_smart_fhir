import React from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";
import Flag from "./Flag/Flag";
import ModalManager from 'terra-application/lib/modal-manager';


const CriticalFlags = (props) => {

    const {allergies} = props;
    let allergyList = [];
    if (allergies) {
        allergyList = allergies.map((allergy, index) => {
            return <div key={index}>{allergy.description}</div>
        })
    }

return(
    <Grid.Column>
        <Grid style={{backgroundColor: "whitesmoke", borderRadius: "10px", filter: "drop-shadow(0 1px 0.10rem lightgrey)"}}>
            <Grid.Row style={{paddingTop: "10px", paddingBottom: "0px"}}>
                <Grid.Column textAlign={"left"} style={{marginLeft: "2.00%"}}>
                    <h1>Critical Flags</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Grid>
                        <Grid.Row columns={4} style={{height: "100px !important"}}>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <ModalManager>
                                    <Flag title={"Resistant Organisms:"} content={""} modalData={null} type={"organism"} alert={false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <ModalManager>
                                    <Flag title={"Diseases:"} content={""} modalData={null} type={"disease"} alert={false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <Flag title={"Recent Antibiotics:"} content={""} modalData={null} type={"antibiotic"} alert={false} />
                                </ModalManager>
                            </Grid.Column>
                            <Grid.Column>
                                <ModalManager>
                                    <Flag title={"Allergies:"} content={allergyList} modalData={allergies} type={"allergy"} alert={!!(allergies)}  />
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
    };
};

export default connect(mapStateToProps, null) (CriticalFlags);