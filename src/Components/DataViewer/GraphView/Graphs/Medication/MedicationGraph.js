import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Chart from 'react-apexcharts'
import {Button, Divider, Grid, Icon, Input} from "semantic-ui-react";


const MedicationGraph = (props) => {
    const {graphDate, antibiotics} = props;
    const [options, setOptions] = useState({
        chart: {
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            /*formatter: function(val) {
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return diff + (diff > 1 ? ' days' : ' day')
            }*/
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime'
        },
        legend: {
            position: 'top'
        }
    });
    const [series, setSeries] = useState(
        []
    );

    const [unGraphedData, setUnGraphedData] = useState([]);

    useEffect(() => {
        let medData = [];
        let unGraphed = [];
        if (antibiotics) {
            antibiotics.forEach(antibiotic => {
                let startDate;
                let endDate;
                startDate = antibiotic.startDate;
                endDate = antibiotic.endDate;

                if (!startDate) {
                    unGraphed.push(antibiotic);
                } else {
                    if (!endDate) {
                        endDate = startDate;
                    }
                    let entry = {};
                    entry.name = antibiotic.description;
                    entry.data = [
                        {
                            x: 'Period',
                            y: [
                                new Date(startDate).getTime(),
                                new Date(endDate).getTime() + 86400000
                            ]
                        }
                    ];
                    let startTimeFrame = new Date(graphDate).getTime();
                    let observedStart = new Date(startDate).getTime();
                    let observedEnd = new Date(endDate).getTime();
                    if (observedStart >= startTimeFrame || observedEnd >= startTimeFrame) {
                        medData.push(entry);
                    }
                }
            })
        }
        if (medData.length > 0) {
            setSeries(medData);
        }
        setUnGraphedData(unGraphed);
    }, [graphDate, antibiotics])

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Chart options={options} series={series} type="rangeBar" width={"100%"} height={"100%"} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

const mapStateToProps = (state) => {
    return {
        graphDate: state.patientData.graphDataStartDate,
        antibiotics: state.patientData.antibiotics,
    };
};

export default connect(mapStateToProps, null) (MedicationGraph);