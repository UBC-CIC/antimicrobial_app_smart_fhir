import React, { useState } from 'react';
import {connect} from "react-redux";
import {Checkbox, Grid, Segment, Sidebar} from "semantic-ui-react";
import CriticalFlags from "./CriticalFlags/CriticalFlags";
import VerticalSidebar from "./SideBar/SideBar";
import GraphView from "./GraphView/GraphView";


const DataViewer = (props) => {
    const [visibleSideBar, setVisibleSideBar] = useState(true);


    return(
        <Grid style={{height: "100%"}}>
            <Grid.Row>
                <Grid.Column width={2}></Grid.Column>
                <CriticalFlags />
                <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "10px", paddingBottom: "5px", marginLeft: "10px"}}>
                <Grid.Column verticalAlign={"middle"} textAlign={"left"}>
                    <Checkbox
                        checked={visibleSideBar}
                        label='Graphing Controls'
                        onChange={(e, { checked }) =>
                            setVisibleSideBar(checked)
                        }
                        toggle
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{padding: "0px", minHeight: "600px", height: "100%"}}>
                <Grid.Column>
                    <Sidebar.Pushable  style={{ overflow: 'hidden', height: "100%"}}>
                        <VerticalSidebar
                            visible={visibleSideBar}
                        />
                        <Sidebar.Pusher>
                            <Segment basic style={{height: "100%", width: "100%"}}>
                                <GraphView />
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}




const mapStateToProps = (state) => {
    return {
        patient: state.patientData.currentPatient,
        allergies: state.patientData.allergies,
    };
};


export default connect(mapStateToProps, null)(DataViewer);