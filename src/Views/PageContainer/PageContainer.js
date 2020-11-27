import React, { useState }  from 'react';
import { connect } from "react-redux";
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import PatientView from "../Pages/PatientView/PatientView";
import {Grid} from "semantic-ui-react";
import ActionHeader from "terra-action-header";
import IconSearch from "terra-icon/lib/icon/IconSearch";
import IconPill from "terra-icon/lib/icon/IconPill";
import IconVisualization from "terra-icon/lib/icon/IconVisualization";
import IconLightbulb from "terra-icon/lib/icon/IconLightbulb";

const titleConfig = {
    title: 'Antimicrobial View Demo',
};
const userConfig = {
    name: 'Clinician',
    initials: 'DR',
};
const extensionItems = [
    {
        icon: <IconSearch />,
        key: 'item-a',
        text: 'Item A',
        metaData: {
            test: 'a',
        },
    }, {
        icon: <IconPill />,
        key: 'item-b',
        text: 'Item B',
        metaData: {
            test: 'b',
        },
    }, {
        icon: <IconVisualization />,
        key: 'item-c',
        text: 'Item C',
        metaData: {
            test: 'c',
        },
    }, {
        icon: <IconLightbulb />,
        key: 'item-d',
        text: 'Item D',
        metaData: {
            test: 'd',
        },
    },
];
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


const onAction = (e) => {
    e.preventDefault();
}

const setActiveKey = (e) => {
    e.preventDefault();
}


const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');
    const {allergies} = props;
    let activeKey = "Patient_1";
    let allergyList = [];
    if (allergies) {
        allergyList = allergies.map((allergy, index) => {
            return <div key={index}>{allergy.description}</div>
        })
    }
    return (
        <ApplicationNavigation
            titleConfig={titleConfig}
            extensionItems={extensionItems}
            onSelectExtensionItem={onAction}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeKey}
            onSelectNavigationItem={key => setActiveKey(key)}
            onSelectUtilityItem={onAction}
            onSelectSettings={() => onAction('settings')}
            onSelectHelp={() => onAction('help')}
            onSelectLogout={() => onAction('logout')}
        >
            <Grid style={{width: "100%", height: "100%"}}>
                <Grid.Row>
                    <Grid.Column>
                        <ActionHeader
                            title={"Viewing Patient: " + `${props.name}`}
                            onBack={() => alert('You clicked back!')}
                            onClose={() => alert('You clicked close!')}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"} >
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5} />
                                <Grid.Column width={6} textAlign={"center"} verticalAlign={"middle"}>
                                    <div style={{border: "2px solid lightgreen", backgroundColor: "lightgreen"}}><h3 style={{color: "green"}}>SMART ON FHIR LAUNCH SUCCESSFUL!</h3></div>
                                </Grid.Column>
                                <Grid.Column width={5} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column width={3}>
                        <div style={{border: "2px solid black", height: "400px", marginLeft: "1.66%", borderRadius: "4px"}}>
                            Graphing controls placeholder...
                        </div>
                    </Grid.Column>
                    <Grid.Column width={13}>
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
                </Grid.Row>
            </Grid>
        </ApplicationNavigation>

            /*<div>
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
            </div>*/

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