import React, { useState, useEffect } from 'react';
import ChartJS from "chart.js";
import {connect} from "react-redux";
import {Grid} from "semantic-ui-react";



const TemperatureGraph = (props) => {
    const [thisChart, setChart] = useState(null);
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
        let chart = new ChartJS("temperatureGraph", {
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
                                min: 35,
                                max: 40,
                                stepSize: 0.5
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
    })



    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <canvas id="temperatureGraph" width="500" height="400" style={{backgroundColor: "white", padding: "10px"}} />
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