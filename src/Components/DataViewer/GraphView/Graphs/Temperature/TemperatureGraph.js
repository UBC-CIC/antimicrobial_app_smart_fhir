import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Divider, Grid} from "semantic-ui-react";
import { Input, Button, Icon } from 'semantic-ui-react';
import "./TemperatureGraph.css";





const TemperatureGraph = (props) => {
    const [thisChart, setChart] = useState(null);
    const [upperBound, setUpperBound] = useState(40);
    const [lowerBound, setLowerBound] = useState(35);
    const [stepSize, setStepSize] = useState(0.5);
    const [stepSizeError, setStepSizeError] = useState(false);
    const [boundsError, setBoundsError] = useState(false);
    const [form, setForm] = useState({
        upperBound: 40,
        lowerBound: 35,
        stepSize: 0.5
    })
    const {temperatureData} = props;
    let tempData = [];
    if (temperatureData) {
        temperatureData.forEach(entry => {
            tempData.push({
                x: new Date(entry.timestamp),
                y: entry.value
            });
        })
    }

    tempData.sort((a,b) => a.x - b.x);
    console.log("tempData: ", tempData);
    useEffect(() => {
        if (thisChart) {
            thisChart.destroy();
        }
        let chart = buildGraph();
        setChart(chart);
    }, [lowerBound, upperBound, stepSize])

    const buildGraph = () => {
        return new ChartJS("temperatureGraph", {
            type: "line",
            data: {
                datasets: [
                    {
                        label: "Temperature",
                        data: tempData,
                        borderWidth: 2,
                        borderColor: "rgb(200,0,0)",
                        fill: false,
                        cubicInterpolationMode: "monotone"
                    },
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
                                labelString: "Celsius"
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
                            }
                        }
                    ]
                },
                title: {
                    text: "Temperature",
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

    // change temperature graph parameters
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
                    <canvas id="temperatureGraph" width="500" height="400" style={{backgroundColor: "white", padding: "10px", width: "100%"}} />
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
                                <h3>Temperature Options</h3>
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
                                                label={{ basic: true, content: '°C' }}
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
                                                label={{ basic: true, content: '°C' }}
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
                                                label={{ basic: true, content: '°C' }}
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
        temperatureData: state.patientData.graphingData.temperature,
    };
};

export default connect(mapStateToProps, null)(TemperatureGraph);