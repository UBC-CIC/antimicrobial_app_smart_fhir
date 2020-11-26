import React, { useState }  from 'react';
import { connect } from "react-redux";
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import PatientView from "../Pages/PatientView/PatientView";
import {Grid} from "semantic-ui-react";
import ActionHeader from "terra-action-header";



const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');
    const {allergies} = props;
    let allergyList = [];
    if (allergies) {
        allergyList = allergies.map(allergy => {
            return <div>{allergy.description}</div>
        })
    }
    return (
        <div>
            <div>
                <ActionHeader
                    title={"Viewing Patient: " + `${props.name}`}
                    onBack={() => alert('You clicked back!')}
                    onClose={() => alert('You clicked close!')}
                />
            </div>
            <Grid style={{width: "100%", height: "100%"}}>
                <Grid.Row>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                        <div><h3 style={{color: "green"}}>SMART ON FHIR LAUNCH SUCCESSFUL!</h3></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{width: "100%", height: "100%"}}>
                <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                        <div style={{border: "2px solid black", height: "400px", marginLeft: "1.66%"}}>
                            Graphing controls placeholder...
                        </div>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Grid style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}>
                            <Grid.Row style={{padding: "1px"}}>
                                <Grid.Column textAlign={"left"} style={{marginLeft: "5.00%"}}>
                                    <h1>Critical Flags</h1>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Row columns={4} style={{height: "100px !important"}}>
                                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                                <span>Resistant Organisms:</span>
                                            </Grid.Column>
                                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                                <span>Diseases:</span>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <span>Recent Antibiotics:</span>
                                            </Grid.Column>
                                            <Grid.Column textAlign={"center"} verticalAlign={"top"}>
                                                <div style={{border: "2px solid red", borderRadius: "10px"}}>
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
                </Grid.Row>
            </Grid>
            {/*<div>
                <DynamicGrid defaultTemplate={template}>
                    <DynamicGrid.Region {...region1}>
                        <div>
                            Resistant Organisms
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region2}>
                        <div>
                            Diseases
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region3}>
                        <div>
                            Recent Antibiotics
                        </div>
                    </DynamicGrid.Region>
                    <DynamicGrid.Region {...region4}>
                        <div className={"col-4 d-flex"} style={{border: "2px solid red"}}>
                            <div className={"row"}>
                                <div className={"col d-flex justify-content-center align-items-center"}>
                                    Allergies:
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col d-flex justify-content-center align-items-center"}>
                                    {(allergies)? <div>{allergyList}</div> : null}
                                </div>
                            </div>
                        </div>
                    </DynamicGrid.Region>
                </DynamicGrid>
            </div>*/}
        </div>
           /* <ApplicationNavigation
                titleConfig={{
                    title: 'Antimicrobial Demo',
                }}
                userConfig={userConfig}
                navigationItems={navigationItems}
                activeNavigationItemKey={"Patient_1"}
                onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
            >
                <PatientView key={"Patient"} title={"Patient"} />
            </ApplicationNavigation>*/
    )
}


const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
        allergies: state.patientData.allergies,
    };
};


export default connect(mapStateToProps, null)(PageContainer);