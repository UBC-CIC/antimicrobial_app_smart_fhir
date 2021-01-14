import React, { useState }  from 'react';
import { connect } from "react-redux";
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import PatientView from "../Pages/PatientView/PatientView";
import {Grid, Icon, Menu, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./PageContainer.css";


const titleConfig = {
    title: 'Microbial-Insights',
};

const navigationItems = [
    {
        key: 'Patient_1',
        text: 'Patient 1',
        metaData: {
            display: 'Patient 1',
        },
    },
    {
        key: 'Patient_2',
        text: 'Patient 2',
        metaData: {
            display: 'Patient 2',
        },
    },
    {
        key: 'Patient_3',
        text: 'Patient 3',
        metaData: {
            display: 'Patient 3',
        },
    },
];


const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');
    const [activeSidebarItem, setActiveSidebarItem] = useState("");
    const {patient} = props;
    let age;
    if (patient.birthDate) {
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(patient.birthDate).getFullYear()
        age = currentYear - birthYear;
    }

    return (
        <ApplicationNavigation
            titleConfig={titleConfig}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeNavItem}
            onSelectNavigationItem={key => setActiveNavItem(key)}
        >
            <Grid style={{backgroundColor: "#f2f8fc"}}>
                <Grid.Row>
                    <Grid.Column>
                        <Grid style={{backgroundColor: "#f2f8fc"}}>
                            <Grid.Row>
                                <Grid.Column textAlign={"center"} verticalAlign={"middle"} className={"patientHeader"} >
                                    <div style={{marginTop: "8px"}}>
                                        <span className={"patientHeaderText"}><strong>Viewing Patient: {props.name}</strong></span>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Grid style={{width: "100vw", height: "100vh", backgroundColor: "#f2f8fc"}}>
                            <Grid.Row style={{backgroundColor: "#f2f8fc", padding: "0px", margin: "0px"}}>
                                <Grid.Column width={2} style={{backgroundColor: "#4e7a99", margin: "0px", padding: "0px", minHeight: "100%"}} >
                                    <Grid style={{backgroundColor: "#4e7a99"}}>
                                        <Grid.Row style={{backgroundColor: "#4e7a99"}}>
                                            <Grid.Column style={{height: "198px"}}>
                                                <Grid>
                                                    <Grid.Row>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column width={3} />
                                                        <Grid.Column width={11} style={{border: "2px dashed white"}}>
                                                            <Grid>
                                                                <Grid.Row style={{paddingBottom: "0px"}}>
                                                                    <Grid.Column>
                                                                        <span style={{color: "white", fontSize: "12px"}}><strong>Patient Snapshot:</strong></span>
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "0px"}}>
                                                                    <Grid.Column textAlign={"left"}>
                                                                        <span style={{color: "white", fontSize: "10px"}}><strong>Age: </strong> {(age)? age : "N/A"}</span>
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "0px"}}>
                                                                    <Grid.Column textAlign={"left"}>
                                                                        <span style={{color: "white", fontSize: "10px"}}><strong>Gender: </strong> {(patient.gender)? patient.gender : "N/A"}</span>
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                                <Grid.Row style={{paddingTop: "0px"}}>
                                                                    <Grid.Column textAlign={"left"}>
                                                                        <span style={{color: "white", fontSize: "10px"}}><strong>Language: </strong> {(patient.language)? patient.language : "N/A"}</span>
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                            </Grid>
                                                        </Grid.Column>
                                                        <Grid.Column width={2} />
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row style={{backgroundColor: "#4e7a99"}}>
                                            <Grid.Column textAlign={"center"} verticalAlign={"middle"} style={{marginLeft: "10px"}}>
                                                <Menu icon={"labeled"} fluid vertical style={{backgroundColor: "#4e7a99"}}>
                                                    <Menu.Item
                                                        name={"home"}
                                                        as={Link}
                                                        to={"/"}
                                                        active={activeSidebarItem === "home" || activeSidebarItem === ""}
                                                        onClick={() => setActiveSidebarItem("home")}
                                                        style={{color: "white"}}
                                                    >

                                                        <Icon name='home' />
                                                        Home
                                                    </Menu.Item >
                                                    <Menu.Item
                                                        name={"static"}
                                                        as={Link}
                                                        to={"/static"}
                                                        active={activeSidebarItem === "static"}
                                                        onClick={() => setActiveSidebarItem("static")}
                                                        style={{color: "white"}}
                                                    >
                                                        <Icon name='file outline' />
                                                        Static Display
                                                    </Menu.Item>
                                                </Menu>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row style={{backgroundColor: "#4e7a99"}}>
                                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={2} />
                                                        <Grid.Column width={12} textAlign={"center"} verticalAlign={"middle"}>
                                                            <Grid>
                                                                <Grid.Row style={{paddingBottom: "0px"}}>
                                                                    <Grid.Column width={3} textAlign={"center"} verticalAlign={"middle"} >
                                                                        <Icon size={"small"} name="thumb tack" style={{color: "whitesmoke"}} />
                                                                    </Grid.Column>
                                                                    <Grid.Column width={12} textAlign={"left"} verticalAlign={"middle"}>
                                                                        <span style={{color: "white", fontSize: "14px"}}>Notes</span>
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                                <Grid.Row style={{paddingTop: "0px"}}>
                                                                    <Grid.Column>
                                                                        <TextArea style={{backgroundColor: "#629bc4", width: "100%", minHeight: "100px", color: "whitesmoke"}} />
                                                                    </Grid.Column>
                                                                </Grid.Row>
                                                            </Grid>
                                                        </Grid.Column>
                                                        <Grid.Column width={2} />
                                                    </Grid.Row>
                                                </Grid>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={14} style={{padding: "0px", height: "100%", backgroundColor: "#f2f8fc"}}>
                                    <br/>
                                    <Grid>
                                        <PatientView />
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </ApplicationNavigation>
    )
}


const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
    };
};


export default connect(mapStateToProps, null)(PageContainer);