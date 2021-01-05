import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Chart from 'react-apexcharts';
import { withDisclosureManager } from 'terra-application/lib/disclosure-manager';
import MedicationWarningModal from "./MedicationWarningModal/MedicationWarningModal";
import {Button, Divider, Grid, Icon, Input} from "semantic-ui-react";
import formatDistance from 'date-fns/formatDistance'

const MedicationGraph = withDisclosureManager(({ disclosureManager, graphDate, antibiotics }) => {
    //const {graphDate, antibiotics, disclosureManager} = props;
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
            formatter: function(val) {
                return formatDistance(new Date(val[0]), new Date(val[1]));
            }
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
            type: 'datetime',
            min: new Date(graphDate).getTime(),
        },
        legend: {
            position: 'bottom'
        }
    });

    const [series, setSeries] = useState(
        []
    );

    const [unGraphedData, setUnGraphedData] = useState([]);

    useEffect(() => {
        setOptions({
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
                formatter: function(val) {
                    return formatDistance(new Date(val[0]), new Date(val[1]));
                }
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
                type: 'datetime',
                min: new Date(graphDate).getTime(),
            },
            legend: {
                position: 'bottom'
            }
        });
    }, [graphDate])

    useEffect(() => {
        let medData = [];
        let unGraphed = [];
        if (antibiotics) {
            antibiotics.forEach(antibiotic => {
                let startDate;
                let endDate;
                startDate = antibiotic.startDate;
                endDate = antibiotic.endDate;
                // if no end date is specified, we need to warn the user
                if (!endDate) {
                    unGraphed.push(antibiotic);
                }

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
    }, [graphDate, antibiotics]);

    const handleModalPopup = () => {
        disclosureManager.disclose({
            preferredType: 'modal',
            size: 'medium',
            content: {
                key: 'modal-component-instance',
                component: <MedicationWarningModal antibiotics={unGraphedData} />
            }
        });
    }

    return(
        <Grid>
            <Grid.Row style={{paddingBottom: "0px"}}>
                <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5} />
                            <Grid.Column width={4} textAlign={"right"} verticalAlign={"middle"}>
                                <h3>Medication Regime</h3>
                            </Grid.Column>
                            <Grid.Column width={4} textAlign={"left"} verticalAlign={"middle"}>
                                {(unGraphedData.length > 0)? <Button icon style={{backgroundColor: "white"}}
                                                                     onClick={handleModalPopup}
                                >
                                    <Icon name={"warning sign"} style={{color: "red", filter: "drop-shadow(0 0 0.75rem crimson)"}}/>
                                </Button>
                                :
                                null}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    {(series.length > 0)?
                        <Chart options={options} series={series} type="rangeBar" width={"100%"} height={"100%"} />
                        :
                        <div><span>Medication Data N/A</span></div>
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

})

const mapStateToProps = (state) => {
    return {
        graphDate: state.patientData.graphDataStartDate,
        antibiotics: state.patientData.antibiotics,
    };
};

export default connect(mapStateToProps, null) (MedicationGraph);