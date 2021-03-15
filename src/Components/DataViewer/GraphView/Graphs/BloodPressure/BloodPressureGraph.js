/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Button, Divider, Grid, Icon, Input} from "semantic-ui-react";
import "../../GraphView.css";



const BloodPressureGraph = (props) => {
    const [thisChart, setChart] = useState(null);
    const [graphData, setGraphData] = useState({systolic: [], diastolic: []});
    const [upperBound, setUpperBound] = useState(200);
    const [lowerBound, setLowerBound] = useState(0);
    const [stepSize, setStepSize] = useState(20);
    const [boundsError, setBoundsError] = useState(false);
    const [stepSizeError, setStepSizeError] = useState(false);
    const [form, setForm] = useState({
        upperBound: 200,
        lowerBound: 0,
        stepSize: 20
    });
    const {bloodPressureData, graphDateStart, graphDateEnd} = props;

    useEffect(() => {
        let bpData = {
            systolic: [],
            diastolic: []
        };
        if (bloodPressureData) {
            bloodPressureData.forEach(entry => {
                if (((Date.parse(new Date(entry.timestamp)) - (Date.parse(graphDateStart))) >= 0)
                    &&
                    ((Date.parse(graphDateEnd)) - (Date.parse(new Date(entry.timestamp))) >= 0)
                )  {
                    if (entry.type === "systolic blood pressure") {
                        bpData.systolic.push({
                            x: new Date(entry.timestamp),
                            y: entry.value
                        })
                    } else if (entry.type === "diastolic blood pressure") {
                        bpData.diastolic.push({
                            x: new Date(entry.timestamp),
                            y: entry.value
                        })
                    }
                }
            })
        }
        bpData.systolic.sort((a,b) => a.x - b.x);
        bpData.diastolic.sort((a,b) => a.x - b.x);
        setGraphData(bpData);
    }, [graphDateStart, graphDateEnd, bloodPressureData]);

    useEffect(() => {
        if (thisChart) {
            thisChart.destroy();
        }
        if ((graphData.systolic.length > 0) || (graphData.diastolic.length > 0)) {
            let chart = buildGraph();
            setChart(chart);
        }
    }, [lowerBound, upperBound, stepSize, graphData]);

    const buildGraph = () => {
        return new ChartJS("bloodPressureGraph", {
            type: "line",
            data: {
                datasets: [
                    {
                        label: "Systolic",
                        data: graphData.systolic,
                        borderWidth: 2,
                        borderColor: "rgb(255,92,96)",
                        fill: false,
                        cubicInterpolationMode: "monotone"
                    },
                    {
                        label: "Diastolic",
                        data: graphData.diastolic,
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
                                min: lowerBound,
                                max: upperBound,
                                stepSize: stepSize
                            }
                        }
                    ],
                    xAxes: [
                        {
                            type: "time",
                            scaleLabel: {
                                display: true,
                                labelString: "Date"
                            },
                            ticks: {
                                min: new Date(graphDateStart),
                                max: new Date(graphDateEnd)
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
    }

    const onUpperBoundChange = (e) => {
        setForm({
            ...form,
            upperBound: Number(e.target.value),
        })
    }

    const onLowerBoundChange = (e) => {
        setForm({
            ...form,
            lowerBound: Number(e.target.value),
        })
    }

    const onStepSizeChange = (e) => {
        setForm({
            ...form,
            stepSize: Number(e.target.value),
        })
    }

    // change blood pressure graph parameters
    const onRefreshGraph = (e) => {
        e.preventDefault();

        if (form.upperBound > form.lowerBound) {
            setBoundsError(false);
            let range = form.upperBound - form.lowerBound;
            if ((form.stepSize < range) && (form.stepSize > 0)) {
                setStepSizeError(false);
                setStepSize(form.stepSize);
                setUpperBound(form.upperBound);
                setLowerBound(form.lowerBound);
            } else {
                setStepSizeError(true);
            }
        } else {
            setBoundsError(true);
        }
    }


    return(
    <Grid>
        <Grid.Row columns={2}>
            <Grid.Column width={11}>
                {((graphData.systolic.length === 0) && (graphData.diastolic.length === 0)) ?
                    <div>
                        <h3>Sorry, no data visible within selected date range.</h3>
                        <div><canvas id="bloodPressureGraph" width="800" height="500" style={{backgroundColor: "white", padding: "10px", width: "100%"}} /></div>
                    </div>
                    :
                    <canvas id="bloodPressureGraph" width="800" height="500" style={{backgroundColor: "white", padding: "10px", width: "100%"}} />
                }
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
                                            defaultValue={upperBound}
                                            onChange={onUpperBoundChange}
                                            className={(boundsError)? "errorStyle" : null}
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
                                            defaultValue={lowerBound}
                                            onChange={onLowerBoundChange}
                                            className={(boundsError)? "errorStyle" : null}
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
                                            defaultValue={stepSize}
                                            onChange={onStepSizeChange}
                                            className={(stepSizeError)? "errorStyle" : null}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "5px"}}>
                                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                        <Divider />
                                        <Button
                                            animated
                                            color={"teal"}
                                            onClick={onRefreshGraph}
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
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
    };
};

export default connect(mapStateToProps, null)(BloodPressureGraph);