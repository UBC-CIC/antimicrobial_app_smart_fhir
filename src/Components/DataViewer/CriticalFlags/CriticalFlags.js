import React from 'react';
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";

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
        <Grid style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}>
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
                                <div style={{border: "3px solid #e6bebe", backgroundColor: "#e6bebe", height: "120px", borderRadius: "10px"}}>
                                    <span style={{fontSize: "18px"}}><strong>Resistant Organisms:</strong></span>
                                </div>
                            </Grid.Column>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <div style={{border: "3px solid #e6bebe", backgroundColor: "#e6bebe", height: "120px", borderRadius: "10px"}}>
                                    <span style={{fontSize: "18px"}}><strong>Diseases:</strong></span>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div style={{border: "3px solid #e6bebe", backgroundColor: "#e6bebe", height: "120px", borderRadius: "10px"}}>
                                    <span style={{fontSize: "18px"}}><strong>Recent Antibiotics:</strong></span>
                                </div>
                            </Grid.Column>
                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                <div style={{border: "3px solid #e6bebe", backgroundColor: "#e6bebe", height: "120px", borderRadius: "10px"}}>
                                    <Grid>
                                        <Grid.Row style={{paddingBottom: "0px"}}>
                                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                                <span style={{fontSize: "18px"}}><strong>Allergies:</strong></span>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row style={{paddingTop: "0px"}}>
                                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                                {(allergies)? <div>{allergyList}</div> : null}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
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