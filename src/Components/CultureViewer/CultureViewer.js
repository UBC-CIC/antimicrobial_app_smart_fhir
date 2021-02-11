import React, {useState, useEffect} from 'react';
import {Divider, Grid} from "semantic-ui-react";
import {connect} from "react-redux";
import "./CultureViewer.css";
import Table from "terra-table";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'terra-date-picker';



const CultureViewer = (props) => {
    const { organisms, graphDateStart, graphDateEnd } = props;

    const [startDate, setStartDate] = useState(graphDateStart);
    const [endDate, setEndDate] = useState(graphDateEnd);
    const [data, setData] = useState([]);

    const filterEndDate = (date) => {
        const formattedDate = new Date(date).getTime();
        const formattedStart = new Date(startDate).getTime();
        const formattedEnd = new Date(endDate).getTime();

        return (formattedDate >= formattedStart) && (formattedDate <= formattedEnd);
    }

    const filterStartDate = (date) => {
        const formattedDate = new Date(date).getTime();
        const formattedEnd = new Date(endDate).getTime();

        return (formattedDate <= formattedEnd);
    }



    const handleEndDate = (event, date) => {
        setEndDate(date);
    }

    const handleStartDate = (event, date) => {
        setStartDate(date);
    }
    useEffect(() => {
        let tableData = [];
        let rows = {};
        let rowData = [];
        organisms.forEach((organism, index) => {
            let description = "N/A";
            let results = "N/A";
            let timestamp = new Date();
            let source = "Unknown";
            let type = "Unknown";


            if (organism.description) {
                description = organism.description;
            }

            if (organism.timestamp) {
                timestamp = organism.timestamp.toLocaleString();
            }

            if (organism.testResults) {
                let listItems = organism.testResults.map((entry) => {
                    return <li key={uuidv4()}>{entry.medication}: <span style={{color: "red"}}>{entry.testResult}</span></li>
                });
                results = <ul style={{listStyleType: "none"}}>
                    {listItems}
                </ul>
            }

            if (organism.source) {
                source = organism.source;
            }
            if (organism.type) {
                type = organism.type;
            }

            let entry = {
                key: index.toString(),
                cells: [
                    { key: 'cell-0', children: description },
                    { key: 'cell-1', children: type},
                    { key: 'cell-2', children: source},
                    { key: 'cell-3', children: timestamp},
                    { key: 'cell-4', children: results},
                ],
            }
            if (((Date.parse(new Date(timestamp)) - (Date.parse(startDate))) >= 0)
                &&
                ((Date.parse(endDate)) - (Date.parse(new Date(timestamp))) >= 0)
            ) {
                rowData.push(entry);
            }
        });
        rows.rows = rowData;
        tableData.push(rows);
        setData(tableData);
    }, [startDate, endDate, organisms])

    return(
        <Grid style={{height: "100%"}}>
            <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14} textAlign={"center"} verticalAlign={"middle"}>
                    <Grid className={"staticDisplayContainer"}>
                        <Grid.Row className={"staticDisplayHeader"}>
                            <Grid.Column textAlign={"left"} style={{marginLeft: "2.00%"}}>
                                <span className={"staticDisplayTitle"}><strong>Cultures</strong></span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingBottom: "0px"}}>
                            <Grid.Column width={4} />
                            <Grid.Column width={4} verticalAlign={"middle"}>
                                Start:
                                {' '}
                                <DatePicker
                                    name={"date-input"}
                                    id={"startPicker"}
                                    onChange={handleStartDate}
                                    selectedDate={graphDateStart.toISOString()}
                                    filterDate={filterStartDate}
                                />
                            </Grid.Column>
                            <Grid.Column width={4} verticalAlign={"middle"} textAlign={"left"}>
                                End:
                                {' '}
                                <DatePicker
                                    name={"date-input"}
                                    id={"endPicker"}
                                    onChange={handleEndDate}
                                    selectedDate={graphDateEnd.toISOString()}
                                    filterDate={filterEndDate}
                                />
                            </Grid.Column>
                            <Grid.Column width={4} />
                        </Grid.Row>
                        <Grid.Row style={{padding: "0px"}}>
                            <Grid.Column>
                                <Divider />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={"tableContainer"}>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                <Table
                                    summaryId="organisms-table"
                                    summary="This table contains details about the patient's organisms."
                                    cellPaddingStyle="compact"
                                    numberOfColumns={1}
                                    dividerStyle="horizontal"
                                    headerData={{
                                        cells: [
                                            { id: 'header-description', key: 'description', children: 'Description' },
                                            { id: 'header-type', key: 'type', children: 'Type' },
                                            { id: 'header-source', key: 'source', children: 'Source/Site' },
                                            { id: 'header-date', key: 'date', children: 'Date' },
                                            { id: 'header-results', key: 'results', children: 'Results' },
                                        ],
                                    }}
                                    bodyData={data}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={1} />
            </Grid.Row>
        </Grid>
    )
}


const mapStateToProps = (state) => {
    return {
        organisms: state.patientData.resistantOrganisms,
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
    };
};


export default connect(mapStateToProps, null)(CultureViewer);