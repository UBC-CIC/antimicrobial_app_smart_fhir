import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Chart from 'react-apexcharts';
import {withDisclosureManager} from 'terra-application/lib/disclosure-manager';
import MedicationWarningModal from "./MedicationWarningModal/MedicationWarningModal";
import {Button, Grid, Icon} from "semantic-ui-react";
import formatDistance from 'date-fns/formatDistance'

const MedicationGraph = withDisclosureManager(({ disclosureManager, graphDateStart, graphDateEnd, antibiotics }) => {
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
            min: new Date(graphDateStart).getTime(),
            max: new Date(graphDateEnd).getTime(),
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
                min: new Date(graphDateStart).getTime(),
                max: new Date(graphDateEnd).getTime()
            },
            legend: {
                position: 'bottom'
            }
        });
    }, [graphDateStart, graphDateEnd])

    useEffect(() => {
        let medData = [];
        let unGraphed = [];
        if (antibiotics) {
            let bin = {};
            antibiotics.forEach(antibiotic => {
                if (!bin[antibiotic.description]) {
                    bin[antibiotic.description] = [antibiotic];
                } else {
                    bin[antibiotic.description].push(antibiotic);
                }
            })
            const medEntries = Object.entries(bin);


            medEntries.forEach(antibioticGroup => {
                let antibiotics = antibioticGroup[1];
                let antibioticName = antibioticGroup[0];

                let entry = {};
                let dataEntries = [];
                entry.name = antibioticName;
                antibiotics.forEach(antibiotic => {

                    let startDate;
                    let endDate;
                    startDate = antibiotic.startDate;
                    endDate = antibiotic.endDate;
                    // if no end date is specified, we need to warn the user
                    if (!endDate) {
                        unGraphed.push(antibiotic);
                        endDate = startDate;
                    }
                    if (!startDate) {
                        unGraphed.push(antibiotic);
                    } else {
                        let start = new Date(startDate).getTime();
                        let end = new Date(endDate).getTime();
                        if (end === start) {
                            end += 86400000
                        }
                        let startTimeFrame = new Date(graphDateStart).getTime();
                        let observedStart = new Date(startDate).getTime();
                        let observedEnd = new Date(endDate).getTime();
                        if (observedStart >= startTimeFrame || observedEnd >= startTimeFrame) {
                            dataEntries.push(
                                {
                                    x: 'Period',
                                    y: [
                                        start,
                                        end
                                    ]
                                }
                            );
                        }
                    }

                })
                entry.data = dataEntries;
                medData.push(entry);

            })

        }
        if (medData.length > 0) {
            setSeries(medData);
        }
        setUnGraphedData(unGraphed);
    }, [graphDateStart, antibiotics]);

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
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column width={11}>
                    {(series.length > 0)?
                        <Chart options={options} series={series} type="rangeBar" width={"100%"} height={"100%"} style={{minHeight: "300px"}} />
                        :
                        (unGraphedData.length > 0)?
                        <div><span><h3>Medication Data N/A</h3></span></div>
                            :
                            null
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
                <Grid.Column width={4} textAlign={"center"} verticalAlign={"middle"}>
                    <Grid>
                        <Grid.Row style={{paddingBottom: "0px"}}>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                {((unGraphedData.length > 0) || (series.length > 0))?
                                    <h3>Medication Regimen</h3>
                                    :
                                    null
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingTop: "0px"}}>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                {(unGraphedData.length > 0)? <Button icon style={{backgroundColor: "white"}}
                                                                     onClick={handleModalPopup}
                                    >
                                        <Icon name={"warning sign"} size={"large"} style={{color: "red", filter: "drop-shadow(0 0 0.50rem crimson)"}}/>
                                    </Button>
                                    :
                                    null}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

})

const mapStateToProps = (state) => {
    return {
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
        antibiotics: state.patientData.antibiotics,
    };
};

export default connect(mapStateToProps, null) (MedicationGraph);