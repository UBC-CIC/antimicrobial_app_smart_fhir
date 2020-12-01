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
import MySlidePanelManagerComponent from "../Pages/Example/SidePanelExample";
import SidebarExampleTransitions from "../Pages/Example/SidePanelExample2";

const titleConfig = {
    title: 'Antimicrobial View Demo',
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

const setActiveKey = (e) => {

}


const PageContainer = (props) => {
    const [activeNavItem, setActiveNavItem] = useState('Patient_1');

    return (
        <ApplicationNavigation
            titleConfig={titleConfig}
            extensionItems={extensionItems}
            onSelectExtensionItem={onAction}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeNavItem}
            onSelectNavigationItem={key => setActiveNavItem(key)}
        >
            <Grid style={{width: "100vw", height: "100vh"}}>
                <Grid.Row>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"} style={{backgroundColor: "whitesmoke", position: "fixed", marginTop: "35px", zIndex: "10", height: "35px", borderBottom: "1px solid lightgrey"}}>
                        <div style={{marginTop: "8px"}}>
                            <span style={{fontSize: "18px"}}><strong>Viewing Patient: {props.name}</strong></span>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <PatientView />
                <Grid.Row >
                    <Grid.Column>
                        {/*<MySlidePanelManagerComponent />*/}
                        {/*<SidebarExampleTransitions />*/}
                        <div>
                            Static Display Placeholder...
                        </div>
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