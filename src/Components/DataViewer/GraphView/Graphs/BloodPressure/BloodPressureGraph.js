import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Button, Divider, Grid, Icon, Input} from "semantic-ui-react";



const BloodPressureGraph = (props) => {
    const [thisChart, setChart] = useState(null);
    const {bloodPressureData} = props;
    let bpData = {
        systolic: [],
        diastolic: []
    };
    if (bloodPressureData) {
        bloodPressureData.forEach(entry => {
            if (entry.type === "Systolic blood pressure") {
                bpData.systolic.push({
                    x: new Date(entry.timestamp),
                    y: entry.value
                })
            } else {
                bpData.diastolic.push({
                    x: new Date(entry.timestamp),
                    y: entry.value
                })
            }
        })
    }
    bpData.systolic.sort((a,b) => a.x - b.x);
    bpData.diastolic.sort((a,b) => a.x - b.x);
    console.log("tempData: ", bpData);
    useEffect(() => {
        let chart = new ChartJS("bloodPressureGraph", {
            type: "line",
            data: {
                datasets: [
                    {
                        label: "Systolic",
                        data: bpData.systolic,
                        borderWidth: 2,
                        borderColor: "rgb(255,92,96)",
                        fill: false,
                        cubicInterpolationMode: "monotone"
                    },
                    {
                        label: "Diastolic",
                        data: bpData.diastolic,
                        borderWidth: 2,
                        borderColor: "rgba(0, 130, 255, 1)",
                        fill: false,
                        cubicInterpolationMode: "monotone"
                    }
                ]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [
                        {
                            offset: true,
                            scaleLabel: {
                                display: true,
                                labelString: "mmHg"
                            },
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 200,
                                stepSize: 20
                            }
                        }
                    ],
                    xAxes: [
                        {
                            type: "time",
                            scaleLabel: {
                                display: true,
                                labelString: "Date"
                            }
                        }
                    ]
                },
                title: {
                    text: "Blood Pressure",
                    display: true,
                    fontSize: 20
                }
            }
        })
    })



    return(
    <Grid>
        <Grid.Row columns={2}>
            <Grid.Column width={11}>
                <canvas id="bloodPressureGraph" width="500" height="400" style={{backgroundColor: "white", padding: "10px", width: "100%"}} />
            </Grid.Column>
            <Grid.Column width={1}>
                <Grid divided style={{height: "100%", padding: "0px"}}>
                    <Grid.Row>
                        <Grid.Column />
                        <Grid.Column />
                    </Grid.Row>
                </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
                <Grid style={{paddingLeft: "0px"}}>
                    <Grid.Row>
                        <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                            <h3>Blood Pressure Options</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid>
                                <Grid.Row style={{paddingBottom: "0px"}}>
                                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                        <span>Upper Bound:</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "0px"}}>
                                    <Grid.Column>
                                        <Input
                                            fluid
                                            label={{ basic: true, content: 'mmHg' }}
                                            labelPosition='right'
                                            placeholder='Enter upper bound...'

                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid>
                                <Grid.Row style={{paddingBottom: "0px"}}>
                                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                        <span>Lower Bound:</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "0px"}}>
                                    <Grid.Column>
                                        <Input
                                            fluid
                                            label={{ basic: true, content: 'mmHg' }}
                                            labelPosition='right'
                                            placeholder='Enter lower bound...'

                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid>
                                <Grid.Row style={{paddingBottom: "0px"}}>
                                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                        <span>Step Size:</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "0px"}}>
                                    <Grid.Column>
                                        <Input
                                            fluid
                                            label={{ basic: true, content: 'mmHg' }}
                                            labelPosition='right'
                                            placeholder='Enter step size...'

                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "5px"}}>
                                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                        <Divider />
                                        <Button
                                            animated
                                            color={"teal"}

                                        >
                                            <Button.Content visible>Update Graph</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='redo' />
                                            </Button.Content>
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        bloodPressureData: state.patientData.graphingData.bloodPressure,
    };
};

export default connect(mapStateToProps, null)(BloodPressureGraph);