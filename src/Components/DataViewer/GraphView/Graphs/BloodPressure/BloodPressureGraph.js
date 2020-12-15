import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";



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
            <Grid.Row>
                <Grid.Column>
                    <canvas id="bloodPressureGraph" width="500" height="400" style={{backgroundColor: "white", padding: "10px"}} />
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