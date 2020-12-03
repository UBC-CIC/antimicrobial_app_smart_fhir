import React, { useState } from 'react';
import {connect} from "react-redux";
import {Checkbox, Divider, Grid, Header, Image, Segment, Sidebar} from "semantic-ui-react";
import CriticalFlags from "./CriticalFlags/CriticalFlags";
import VerticalSidebar from "./SideBar/SideBar";


const DataViewer = (props) => {
    const [visibleSideBar, setVisibleSideBar] = useState(true);


    return(
        <Grid>
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
            <Grid.Row style={{padding: "0px"}}>
                <Grid.Column>
                    <Sidebar.Pushable  style={{ overflow: 'hidden'}}>
                        <VerticalSidebar
                            visible={visibleSideBar}
                        />
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Grid style={{minHeight: "600px"}}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            Graphs Placeholder...
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
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