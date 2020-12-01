import React, { useState } from 'react';
import {connect} from "react-redux";
import {Checkbox, Grid, Header, Image, Segment, Sidebar} from "semantic-ui-react";
import CriticalFlags from "./CriticalFlags/CriticalFlags";
import VerticalSidebar from "./SideBar/SideBar";


const DataViewer = (props) => {
    const [visibleSideBar, setVisibleSideBar] = useState(true);


    return(
        <Grid style={{marginLeft: "5px"}}>
            <Grid.Row>
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
            <Grid.Row>
                <Grid.Column>
                    <Sidebar.Pushable  style={{ overflow: 'hidden'}}>
                        <VerticalSidebar
                            visible={visibleSideBar}
                        />
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Grid style={{minHeight: "600px", padding: "10px"}}>
                                    <Grid.Row>
                                        <CriticalFlags />
                                    </Grid.Row>
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