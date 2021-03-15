/* eslint-disable */

import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Chart from 'react-apexcharts';
import { withDisclosureManager } from 'terra-application/lib/disclosure-manager';
import {Button, Grid, Icon} from "semantic-ui-react";
import formatDistance from 'date-fns/formatDistance';
import ProcedureWarningModal from "./ProcedureWarningModal/ProcedureWarningModal";

const ProcedureGraph = withDisclosureManager(({ disclosureManager, graphDateStart, graphDateEnd, procedures }) => {
    const [options, setOptions] = useState({
        chart: {
            height: 800,
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
                height: 800,
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: "80%"
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
            stroke: {
                width: 1
            },
            legend: {
                position: 'bottom'
            }
        });
    }, [graphDateStart, graphDateEnd])

    useEffect(() => {
        let procData = [];
        let unGraphed = [];
        if (procedures) {
            procedures.forEach(procedure => {
                let startDate;
                let endDate;
                startDate = procedure.startDate;
                endDate = procedure.endDate;
                // if no end date is specified, we need to warn the user
                if (!endDate) {
                    unGraphed.push(procedure);
                    endDate = startDate;
                }

                if (!startDate) {
                    unGraphed.push(procedure);
                } else {
                    let start = new Date(startDate).getTime();
                    let end = new Date(endDate).getTime();
                    if (end === start) {
                        end += 86400000
                    }
                    let entry = {};
                    entry.name = procedure.description;
                    entry.data = [
                        {
                            x: 'Period',
                            y: [
                                start,
                                end
                            ]
                        }
                    ];
                    let startTimeFrame = new Date(graphDateStart).getTime();
                    let observedStart = new Date(startDate).getTime();
                    let observedEnd = new Date(endDate).getTime();
                    if (observedStart >= startTimeFrame || observedEnd >= startTimeFrame) {
                        procData.push(entry);
                    }
                }
            })
        }
        if (procData.length > 0) {
            setSeries(procData);
        }
        setUnGraphedData(unGraphed);
    }, [graphDateStart, procedures]);

    const handleModalPopup = () => {
        disclosureManager.disclose({
            preferredType: 'modal',
            size: 'medium',
            content: {
                key: 'modal-component-instance',
                component: <ProcedureWarningModal procedures={unGraphedData} />
            }
        });
    }

    return(
        <Grid>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column width={11}>
                    {(series.length > 0)?
                        <Chart options={options} series={series} type="rangeBar" width={"100%"} height={"100%"} />
                        :
                        <div><span><h3>Sorry, no procedure data visible within selected range.</h3></span></div>
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
                                <h3>Procedures</h3>
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
        procedures: state.patientData.procedures,
    };
};

export default connect(mapStateToProps, null) (ProcedureGraph);