import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Button, Divider, Grid, Icon, Input} from "semantic-ui-react";
import "../../GraphView.css";




const OxygenSaturationGraph = (props) => {
    const [thisChart, setChart] = useState(null);
    const [upperBound, setUpperBound] = useState(100);
    const [lowerBound, setLowerBound] = useState(0);
    const [stepSize, setStepSize] = useState(1.0);
    const [stepSizeError, setStepSizeError] = useState(false);
    const [boundsError, setBoundsError] = useState(false);
    const [form, setForm] = useState({
        upperBound: 100,
        lowerBound: 0,
        stepSize: 1.0
    });
    const [graphData, setGraphData] = useState([]);
    const {oxygenSaturationData, graphDateStart, graphDateEnd} = props;
    useEffect(() => {
        let data = [];
        if (oxygenSaturationData) {
            oxygenSaturationData.forEach(entry => {
                if (((Date.parse(new Date(entry.timestamp)) - (Date.parse(graphDateStart))) >= 0)
                    &&
                    ((Date.parse(graphDateEnd)) - (Date.parse(new Date(entry.timestamp))) >= 0)
                ) {
                    data.push({
                        x: new Date(entry.timestamp),
                        y: entry.value
                    });
                }
            })
        }
        data.sort((a,b) => a.x - b.x);
        setGraphData(data);
    }, [graphDateStart, graphDateEnd])


    useEffect(() => {
        if (thisChart) {
            thisChart.destroy();
        }
        if (graphData.length > 0) {
            let chart = buildGraph();
            setChart(chart);
        }
    }, [lowerBound, upperBound, stepSize, graphData])

    const buildGraph = () => {
        return new ChartJS("oxygenSaturationGraph", {
            type: "line",
            data: {
                datasets: [
                    {
                        label: "Oxygen Saturation",
                        data: graphData,
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
                                labelString: "% Hemoglobin Saturation"
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
                    text: "Oxygen Saturation",
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

    // change graph parameters
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
                    {(graphData.length === 0)?
                        <div>
                            <h3>Sorry, no data visible within selected date range.</h3>
                            <div><canvas id="oxygenSaturationGraph" width="800" height="500" style={{backgroundColor: "white", padding: "10px", width: "100%"}} /></div>
                        </div>
                        :
                        <canvas id="oxygenSaturationGraph" width="800" height="500" style={{backgroundColor: "white", padding: "10px", width: "100%"}} />
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
                                <h3>Oxygen Saturation Options</h3>
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
                                                label={{ basic: true, content: '%' }}
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
                                                label={{ basic: true, content: '%' }}
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
                                                label={{ basic: true, content: '%' }}
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
        oxygenSaturationData: state.patientData.graphingData.oxygenSaturation,
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
    };
};

export default connect(mapStateToProps, null)(OxygenSaturationGraph);