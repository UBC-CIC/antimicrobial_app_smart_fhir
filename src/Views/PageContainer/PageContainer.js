import React, { useState }  from 'react';
import { connect } from "react-redux";
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import PatientView from "../Pages/PatientView/PatientView";
import {Grid, Icon, Menu, Sidebar} from "semantic-ui-react";
import IconSearch from "terra-icon/lib/icon/IconSearch";
import IconPill from "terra-icon/lib/icon/IconPill";
import IconVisualization from "terra-icon/lib/icon/IconVisualization";
import IconLightbulb from "terra-icon/lib/icon/IconLightbulb";


const titleConfig = {
    title: 'Microbial-Insights',
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

}


const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');
    const [activeSidebarItem, setActiveSidebarItem] = useState("home");

    return (
        <ApplicationNavigation
            titleConfig={titleConfig}
            extensionItems={extensionItems}
            onSelectExtensionItem={onAction}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeNavItem}
            onSelectNavigationItem={key => setActiveNavItem(key)}
        >
            <Grid style={{width: "100vw", padding: "0px"}}>
                <Grid.Row>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"} style={{backgroundColor: "whitesmoke", position: "fixed", marginTop: "35px", zIndex: "10", height: "35px", borderBottom: "1px solid lightgrey"}}>
                        <div style={{marginTop: "8px"}}>
                            <span style={{fontSize: "18px"}}><strong>Viewing Patient: {props.name}</strong></span>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{width: "100vw", height: "100vh"}}>
                <Grid.Row>
                    <Grid.Column width={2} style={{backgroundColor: "#d7d7d7", margin: "0px", padding: "0px", height: "100%"}} >
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column style={{height: "198px"}}>

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column textAlign={"center"} verticalAlign={"middle"} style={{marginLeft: "10px"}}>
                                                <Menu icon={"labeled"} fluid vertical color={"grey"} style={{backgroundColor: "#d7d7d7"}}>
                                                    <Menu.Item
                                                        name={"home"}
                                                        as={"a"}
                                                        active={activeSidebarItem === "home"}
                                                        color={"grey"}
                                                        onClick={() => setActiveSidebarItem("home")}
                                                    >

                                                        <Icon name='home' />
                                                        Home
                                                    </Menu.Item >
                                                    <Menu.Item
                                                        name={"static"}
                                                        as={"a"}
                                                        active={activeSidebarItem === "static"}
                                                        color={"grey"}
                                                        onClick={() => setActiveSidebarItem("static")}
                                                    >
                                                        <Icon name='file outline' />
                                                        Static Display
                                                    </Menu.Item>
                                                </Menu>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                    </Grid.Column>
                    <Grid.Column width={14} style={{padding: "0px", height: "100%"}}>
                        <br/>
                        <Grid>
                            <PatientView />
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