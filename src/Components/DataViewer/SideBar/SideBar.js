import {Icon, Menu, Grid, Segment, Sidebar, Checkbox, Divider} from "semantic-ui-react";
import React from "react";

const VerticalSidebar = ({ visible }) => (
    <Sidebar
        animation={"scale down"}
        direction={"left"}
        icon='labeled'
        inverted={"true"}
        vertical={"true"}
        visible={visible}
        width='thin'
    >
        <Segment basic style={{backgroundColor: "whitesmoke"}}>
            <Grid>
                <Grid.Row style={{paddingBottom: "0px"}}>
                    <Grid.Column textAlign={"left"}>
                        <span><strong>Graphing Options</strong></span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingTop: "0px"}}>
                    <Grid.Column>
                        <span style={{fontSize: "14px"}}>(Max 4 Options)</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                       <Grid>
                           <Grid.Row style={{paddingBottom: "0px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>WBC</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>CRP</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Pre-Calcitorin</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Temperature</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Blood Pressure</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Heart Rate</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Respiratory Rate</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Oxygen Sat</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Oxygen Mode</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Imaging</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                               <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                   <span style={{fontSize: "10px"}}>Procedures</span>
                               </Grid.Column>
                               <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                   <Checkbox />
                               </Grid.Column>
                               <Grid.Column width={2}/>
                           </Grid.Row>
                           <Grid.Row style={{paddingTop: "3px"}}>
                               <Grid.Column>
                                   <Divider />
                               </Grid.Column>
                           </Grid.Row>
                       </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Sidebar>
)


export default VerticalSidebar;