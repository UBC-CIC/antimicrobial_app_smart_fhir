import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import DatePicker from 'terra-date-picker';
import { Accordion, Divider, Grid, Input} from "semantic-ui-react";
import allergyTableFormater from "../../../Services/DataTableFormating/allergyTableFormater";
import observationTableFormater from "../../../Services/DataTableFormating/observationTableFormater";
import medicationTableFormater from "../../../Services/DataTableFormating/medicationTableFornater";
import diagnosticReportTableFormater from "../../../Services/DataTableFormating/diagnosticReportTableFormater";
import conditionTableFormater from "../../../Services/DataTableFormating/conditionTableFormater";
import procedureTableFormater from "../../../Services/DataTableFormating/procedureTableFormater";
import allergySearchFilter from "../../../Services/SearchFiltering/allergySearchFilter";
import observationSearchFilter from "../../../Services/SearchFiltering/observationSearchFilter";
import conditionSearchFilter from "../../../Services/SearchFiltering/conditionSearchFilter";
import medicationSearchFilter from "../../../Services/SearchFiltering/medicationSearchFilter";
import procedureSearchFilter from "../../../Services/SearchFiltering/procedureSearchFilter";
import diagnosticSearchFilter from "../../../Services/SearchFiltering/diagnosticReportSearchFilter";
import "./ResultView.css";


const ResultView = (props) => {
    const {graphDateStart, graphDateEnd, rawData} = props;
    const {allergies, medications, observations, conditions, procedures, diagnosticReports} = rawData;
    const [startDate, setStartDate] = useState(graphDateStart);
    const [endDate, setEndDate] = useState(graphDateEnd);
    const [searchText, setSearchText] = useState("");
    const [rootPanels, setRootPanels] = useState(null);
    const [allergyData, setAllergyData] = useState({
        food: [],
        medication: [],
        environment: [],
        biologic: [],
        unclassified: [],
    });
    const [observationData, setObservationData] = useState({
        vitals: [],
        laboratory: [],
        imaging: [],
        procedure: [],
        survey: [],
        social: [],
        exam: [],
        therapy: [],
        activity: [],
        unclassified: [],
    })
    const [medicationRequestData, setMedicationRequestData] = useState([]);
    const [conditionData, setConditionData] = useState([]);
    const [procedureData, setProcedureData] = useState([]);
    const [diagnosticReportData, setDiagnosticReportData] = useState([]);

    // Allergy Data Processing
    useEffect(() => {
        let foodArray = [];
        let medicationArray = [];
        let environmentArray = [];
        let biologicArray = [];
        let unclassifiedArray = [];
        if (allergies.length > 0) {
            for (let allergy of allergies) {
                if (
                    (!allergy.date)
                    ||
                    (((Date.parse(new Date(allergy.date)) - (Date.parse(startDate))) >= 0)
                    &&
                    ((Date.parse(endDate)) - (Date.parse(new Date(allergy.date))) >= 0)
                    &&
                    ((searchText === "")? true : allergySearchFilter(allergy, searchText)))
                ) {
                    if (allergy.type === "unclassified") unclassifiedArray.push(allergy);
                    if (allergy.type === "food") foodArray.push(allergy);
                    if (allergy.type === "medication") medicationArray.push(allergy);
                    if (allergy.type === "environment") environmentArray.push(allergy);
                    if (allergy.type === "biologic") biologicArray.push(allergy);
                }
            }
        }
        setAllergyData({
            food: foodArray,
            medication: medicationArray,
            environment: environmentArray,
            biologic: biologicArray,
            unclassified: unclassifiedArray
        });
    }, [allergies, endDate, startDate, searchText]);

    // Observation Data Processing
    useEffect(() => {
        let vitals = [];
        let laboratory = [];
        let imaging = [];
        let procedure = [];
        let survey = [];
        let social = [];
        let exam = [];
        let therapy = [];
        let activity = [];
        let unclassified = [];

        if (observations.length > 0) {
            for (let observation of observations) {
                if (
                    (!observation.timestamp)
                        ||
                    (((Date.parse(new Date(observation.timestamp)) - (Date.parse(startDate))) >= 0)
                    &&
                    ((Date.parse(endDate)) - (Date.parse(new Date(observation.timestamp))) >= 0)
                    &&
                        ((searchText === "")? true : observationSearchFilter(observation, searchText)))
                ) {
                    if (observation.type === "unclassified") unclassified.push(observation);
                    if (observation.type === "vitals") vitals.push(observation);
                    if (observation.type === "laboratory") laboratory.push(observation);
                    if (observation.type === "social") social.push(observation);
                    if (observation.type === "procedure") procedure.push(observation);
                    if (observation.type === "imaging") imaging.push(observation);
                    if (observation.type === "survey") survey.push(observation);
                    if (observation.type === "exam") exam.push(observation);
                    if (observation.type === "therapy") therapy.push(observation);
                    if (observation.type === "activity") activity.push(observation);
                }
            }
        }
        setObservationData({
            vitals: vitals,
            laboratory: laboratory,
            imaging: imaging,
            procedure: procedure,
            survey: survey,
            social: social,
            exam: exam,
            therapy:therapy,
            activity: activity,
            unclassified: unclassified,
        });

    }, [observations, endDate, startDate, searchText]);

    // MedicationRequest Data Processing
    useEffect(() => {
        let medicationData = [];

        if (medications.length > 0) {
            for (let medicine of medications) {
                if (
                    (!medicine.timestamp)
                        ||
                    (((Date.parse(new Date(medicine.timestamp)) - (Date.parse(startDate))) >= 0)
                    &&
                    ((Date.parse(endDate)) - (Date.parse(new Date(medicine.timestamp))) >= 0)
                    &&
                    ((searchText === "")? true : medicationSearchFilter(medicine, searchText)))
                ) {
                    medicationData.push(medicine);
                }
            }
        }
        setMedicationRequestData(medicationData);

    }, [medications, endDate, startDate, searchText]);

    // Condition Data Processing
    useEffect(() => {
        let conditionDataArray = [];

        if (conditions.length > 0) {
            for (let condition of conditions) {
                if (
                    (!condition.timestamp)
                        ||
                    (((Date.parse(new Date(condition.timestamp)) - (Date.parse(startDate))) >= 0)
                    &&
                    ((Date.parse(endDate)) - (Date.parse(new Date(condition.timestamp))) >= 0)
                    &&
                    ((searchText === "")? true : conditionSearchFilter(condition, searchText)))
                ) {
                    conditionDataArray.push(condition);
                }
            }
        }

        setConditionData(conditionDataArray);

    }, [conditions, endDate, startDate, searchText]);

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

    // DiagnosticReport Data Processing
    useEffect(() => {
        let diagnosticReportData = [];

        if (diagnosticReports.length > 0) {
          for (let report of diagnosticReports) {
              if (
                  (!report.timestamp)
                      ||
                  (((Date.parse(new Date(report.timestamp)) - (Date.parse(startDate))) >= 0)
                  &&
                  ((Date.parse(endDate)) - (Date.parse(new Date(report.timestamp))) >= 0)
                  &&
                  ((searchText === "")? true : diagnosticSearchFilter(report, searchText)))
              ) {
                  diagnosticReportData.push(report);
              }
          }
        }

        setDiagnosticReportData(diagnosticReportData);

    }, [diagnosticReports, endDate, startDate, searchText])


    // Accordion menu formatting
    useEffect(() => {

        //========================================--Allergy Intolerance--===============================================
        const AllergyIntolerancePanels = [
            { key: 'panel-allergy-food', title: `Food (${allergyData.food.length})`,
                content: {content: (<div className={"dataList"}>{allergyTableFormater(allergyData.food)}</div>)} },
            { key: 'panel-allergy-medication', title: `Medication (${allergyData.medication.length})`,
                content: {content: (<div className={"dataList"}>{allergyTableFormater(allergyData.medication)}</div>)} },
            { key: 'panel-allergy-environment', title: `Environment (${allergyData.environment.length})`,
                content: {content: (<div className={"dataList"}>{allergyTableFormater(allergyData.environment)}</div>)} },
            { key: 'panel-allergy-biologic', title: `Biologic (${allergyData.biologic.length})`,
                content: {content: (<div className={"dataList"}>{allergyTableFormater(allergyData.biologic)}</div>)} },
            { key: 'panel-allergy-unclassified', title: `Unclassified (${allergyData.unclassified.length})`,
                content: {content: (<div className={"dataList"}>{allergyTableFormater(allergyData.unclassified)}</div>)} },
        ]

        const AllergyIntoleranceContent = (
            <div>
                <Accordion.Accordion panels={AllergyIntolerancePanels} />
            </div>
        )

        //==============================================--Observation--=================================================

        const observationPanels = [
            { key: 'panel-observation-vitals', title: `Vitals (${observationData.vitals.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.vitals)}</div>)}},
            { key: 'panel-observation-laboratory', title: `Laboratory (${observationData.laboratory.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.laboratory)}</div>)}},
            { key: 'panel-observation-imaging', title: `Imaging (${observationData.imaging.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.imaging)}</div>)} },
            { key: 'panel-observation-procedure', title: `Procedure (${observationData.procedure.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.procedure)}</div>)} },
            { key: 'panel-observation-survey', title: `Survey (${observationData.survey.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.survey)}</div>)} },
            { key: 'panel-observation-social', title: `Social (${observationData.social.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.social)}</div>)} },
            { key: 'panel-observation-exam', title: `Exam (${observationData.exam.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.exam)}</div>)} },
            { key: 'panel-observation-therapy', title: `Therapy (${observationData.therapy.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.therapy)}</div>)} },
            { key: 'panel-observation-activity', title: `Activity (${observationData.activity.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.activity)}</div>)} },
            { key: 'panel-observation-unclassified', title: `Unclassified (${observationData.unclassified.length})`,
                content: {content: (<div className={"dataList"}>{observationTableFormater(observationData.unclassified)}</div>)} },
        ]

        const ObservationContent = (
            <div>
                <Accordion.Accordion panels={observationPanels} />
            </div>
        )
        //==============================================================================================================
        const rootPanels = [
            { key: 'panel-1', title: `AllergyIntolerances (${allergyData.food.length + 
                allergyData.medication.length + allergyData.environment.length + allergyData.biologic.length +
                allergyData.unclassified.length})`, 
                content: { content: AllergyIntoleranceContent } },
            { key: 'panel-2', title: `Observations (${observationData.vitals.length + observationData.laboratory.length
             + observationData.imaging.length + observationData.procedure.length + observationData.exam.length 
            + observationData.survey.length + observationData.therapy.length + observationData.unclassified.length 
            + observationData.activity.length + observationData.social.length})`, content: { content: ObservationContent } },
            { key: 'panel-3', title: `MedicationRequests (${medicationRequestData.length})`, content: {content: (<div className={"dataList"}>{medicationTableFormater(medicationRequestData)}</div>)} },
            { key: 'panel-4', title: `DiagnosticReports (${diagnosticReportData.length})`, content: {content: (<div className={"dataList"}>{diagnosticReportTableFormater(diagnosticReportData)}</div>)} },
            { key: 'panel-5', title: `Procedures (${procedureData.length})`, content: {content: (<div className={"dataList"}>{procedureTableFormater(procedureData)}</div>)} },
            { key: 'panel-6', title: `Conditions (${conditionData.length})`, content: {content: (<div className={"dataList"}>{conditionTableFormater(conditionData)}</div>)} },
        ]

        setRootPanels(rootPanels);

    }, [searchText, allergyData, observationData, medicationRequestData, diagnosticReportData, procedureData, conditionData]);

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

    return(<Grid.Row style={{paddingTop: "0px"}}>
        <Grid.Column>
            <Grid>
                <Grid.Row style={{paddingBottom: "0px"}}>
                    <Grid.Column width={7} textAlign={"left"} verticalAlign={"middle"}>
                        <Input
                            icon='search'
                            iconPosition='left'
                            placeholder='Search...'
                            onChange={(e) => setSearchText(e.target.value)}
                            inverted
                        />
                    </Grid.Column>
                    <Grid.Column width={1} verticalAlign={"middle"}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>

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
                                        filterDate={filterStartDate}
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
                                        filterDate={filterEndDate}
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
                        <Accordion panels={rootPanels} styled fluid />
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
        rawData: state.patientData.rawData,
    };
};

export default connect(mapStateToProps, null)(ResultView);