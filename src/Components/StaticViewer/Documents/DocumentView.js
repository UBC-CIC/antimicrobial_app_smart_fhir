import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import DatePicker from 'terra-date-picker';
import {Accordion, Button, Divider, Grid, Input} from "semantic-ui-react";
import procedureTableFormater from "../../../Services/DataTableFormating/procedureTableFormater";
import procedureSearchFilter from "../../../Services/SearchFiltering/procedureSearchFilter";

import "./DocumentView.css";


const DocumentView = (props) => {

    const {graphDateStart, graphDateEnd, procedures, imaging, consults} = props;
    const [startDate, setStartDate] = useState(graphDateStart);
    const [endDate, setEndDate] = useState(graphDateEnd);
    const [searchText, setSearchText] = useState("");
    const [showConsults, setShowConsults] = useState(false);
    const [showImaging, setShowImaging] = useState(false);
    const [showProcedures, setShowProcedures] = useState(false);
    const [procedureData, setProcedureData] = useState([]);
    const [imagingData, setImagingData] = useState([]);
    const [consultsData, setConsultsData] = useState([]);
    const [procedurePanels, setProcedurePanels] = useState(null);
    const [imagingPanels, setImagingPanels] = useState(null);
    const [consultPanels, setConsultPanels] = useState(null);


    const filterDate = (date) => {
        const formattedDate = new Date(date).getTime();
        const formattedStart = new Date(startDate).getTime();
        const formattedEnd = new Date(endDate).getTime();

        return (formattedDate >= formattedStart) && (formattedDate <= formattedEnd);
    }

    const handleEndDate = (event, date) => {
        setEndDate(date);
    }

    const handleStartDate = (event, date) => {
        setStartDate(date);
    }

    // Procedure Data Processing
    useEffect(() => {
        let procedureDataArray = [];

        if (procedures.length > 0) {
            for (let procedure of procedures) {
                if (
                    (!procedure.timestamp)
                    ||
                    (((Date.parse(new Date(procedure.timestamp)) - (Date.parse(startDate))) >= 0)
                        &&
                        ((Date.parse(endDate)) - (Date.parse(new Date(procedure.timestamp))) >= 0)
                        &&
                        ((searchText === "")? true : procedureSearchFilter(procedure, searchText)))
                ) {
                    procedureDataArray.push(procedure);
                }
            }
        }

        setProcedureData(procedureDataArray);
    }, [procedures, endDate, startDate, searchText]);

    // Imaging Data Processing
    useEffect(() => {
        let imagingDataArray = [];

        if (imaging.length > 0) {
            for (let image of imaging) {
                if (
                    (!image.timestamp)
                    ||
                    (((Date.parse(new Date(image.timestamp)) - (Date.parse(startDate))) >= 0)
                        &&
                        ((Date.parse(endDate)) - (Date.parse(new Date(image.timestamp))) >= 0)
                    )
                ) {
                   imagingDataArray.push(image);
                }
            }
        }

        setImagingData(imagingDataArray);
    }, [imaging, endDate, startDate, searchText]);

    // Consults Data Processing
    useEffect(() => {
        let consultDataArray = [];

        if (consults.length > 0) {
            for (let consult of consults) {
                if (
                    (!consult.timestamp)
                    ||
                    (((Date.parse(new Date(consult.timestamp)) - (Date.parse(startDate))) >= 0)
                        &&
                        ((Date.parse(endDate)) - (Date.parse(new Date(consult.timestamp))) >= 0)
                    )
                ) {
                    consultDataArray.push(consult);
                }
            }
        }

        setConsultsData(consultDataArray);
    }, [consults, endDate, startDate, searchText]);

    //=================================================================================================================
    // Accordion menu formatting
    useEffect(() => {

        //==============================================================================================================
        const procedurePanels = [
             { key: 'panel-1', title: `Procedures (${procedureData.length})`, content: {content: (<div className={"dataList"}>{procedureTableFormater(procedureData)}</div>)} },
        ]

        setProcedurePanels(procedurePanels);

    }, [searchText, procedureData]);

    //=================================================================================================================
    // Accordion menu formatting
    useEffect(() => {

        //==============================================================================================================
        const consultPanels = [
            { key: 'panel-1', title: `Consults (${consultsData.length})`, content: {content: (<div className={"dataList"}>{procedureTableFormater(consultsData)}</div>)} },
        ]

        setConsultPanels(consultPanels);

    }, [searchText, consultsData]);

    //=================================================================================================================
    // Accordion menu formatting
    useEffect(() => {

        //==============================================================================================================
        const imagingPanels = [
            { key: 'panel-1', title: `Imaging (${imagingData.length})`, content: {content: (<div className={"dataList"}>{procedureTableFormater(imagingData)}</div>)} },
        ]

        setImagingPanels(imagingPanels);

    }, [searchText, imagingData]);


    return(<Grid.Row style={{paddingTop: "0px"}}>
        <Grid.Column>
            <Grid>
                <Grid.Row style={{paddingBottom: "0px"}}>
                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                        <Input
                            icon='search'
                            iconPosition='left'
                            placeholder='Search...'
                            onChange={(e) => setSearchText(e.target.value)}
                            inverted
                        />
                    </Grid.Column>
                    <Grid.Column width={5} verticalAlign={"middle"}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                        <span>
                            <Button size={"mini"} basic
                                    id={(showConsults === true)? "documentConsultButton" : ""}
                                    active={(showConsults === true)}
                                    onClick={() => setShowConsults(!showConsults)}
                                    disabled
                            >
                                ID Consults
                            </Button>
                            <Button size={"mini"} basic
                                    id={(showImaging === true)? "documentImagingButton" : ""}
                                    active={(showImaging === true)}
                                    onClick={() => setShowImaging(!showImaging)}
                                    disabled
                            >
                                Imaging
                            </Button>
                            <Button size={"mini"} basic
                                    id={(showProcedures === true)? "documentProcedureButton" : ""}
                                    active={(showProcedures === true)}
                                    onClick={() => setShowProcedures(!showProcedures)}
                            >
                                Procedures
                            </Button>
                        </span>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8} verticalAlign={"middle"}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8} verticalAlign={"middle"}>
                                    Start:
                                    {' '}
                                    <DatePicker
                                        name={"date-input"}
                                        id={"startPicker"}
                                        onChange={handleStartDate}
                                        selectedDate={graphDateStart.toISOString()}
                                        filterDate={filterDate}
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    End:
                                    {' '}
                                    <DatePicker
                                        name={"date-input"}
                                        id={"endPicker"}
                                        onChange={handleEndDate}
                                        selectedDate={graphDateEnd.toISOString()}
                                        filterDate={filterDate}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingTop: "0px", paddingBottom: "0px"}}>
                    <Grid.Column>
                        <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: "0px"}}>
                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                        {(searchText !== "")? <span style={{fontSize: "16px"}}><strong>Search results: </strong></span> : null}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingTop: "0px"}}>
                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                        {(showProcedures)? <Accordion panels={procedurePanels} styled fluid /> : null}
                        {(showProcedures)? <br/> : null}
                        {(showImaging)? <Accordion panels={imagingPanels} styled fluid /> : null}
                        {(showImaging)? <br/> : null}
                        {(showConsults)? <Accordion panels={consultPanels} styled fluid /> : null}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid.Column>

    </Grid.Row>);
}

const mapStateToProps = (state) => {
    return {
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
        procedures: state.patientData.rawData.procedures,
        imaging: state.patientData.imaging,
        consults: state.patientData.consults
    };
};

export default connect(mapStateToProps, null)(DocumentView);