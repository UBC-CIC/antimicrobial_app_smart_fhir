import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import DatePicker from 'terra-date-picker';
import {Button, Accordion, Divider, Grid, Input} from "semantic-ui-react";
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

    useEffect(() => {
        let foodArray = [];
        let medicationArray = [];
        let environmentArray = [];
        let biologicArray = [];
        let unclassifiedArray = [];
        if (allergies.length > 0) {
            for (let allergy of allergies) {
                let entry = <div><pre>{JSON.stringify(allergy, null, 2)}</pre></div>
                if (allergy.type === "unclassified") unclassifiedArray.push(entry);
                if (allergy.type === "food") foodArray.push(entry);
                if (allergy.type === "medication") medicationArray.push(entry);
                if (allergy.type === "environment") environmentArray.push(entry);
                if (allergy.type === "biologic") biologicArray.push(entry);
            }
        }
        setAllergyData({
            food: foodArray,
            medication: medicationArray,
            environment: environmentArray,
            biologic: biologicArray,
            unclassified: unclassifiedArray
        });
        console.log("allergy results unclassifed: ", unclassifiedArray);
        console.log("allergy results foodArray: ", foodArray);
        console.log("allergy results medicationArray: ", medicationArray);
        console.log("allergy results biologicArray: ", biologicArray);
        console.log("allergy results environmentArray: ", environmentArray);
    }, [allergies]);

    useEffect(() => {

        //========================================--Allergy Intolerance--===============================================
        const AllergyIntolerancePanels = [
            { key: 'panel-allergy-food', title: `Food (${allergyData.food.length})`,
                content: {content: (<div className={"dataList"}>{allergyData.food}</div>)} },
            { key: 'panel-allergy-medication', title: `Medication (${allergyData.medication.length})`,
                content: {content: (<div className={"dataList"}>{allergyData.medication}</div>)} },
            { key: 'panel-allergy-environment', title: `Environment (${allergyData.environment.length})`,
                content: {content: (<div className={"dataList"}>{allergyData.environment}</div>)} },
            { key: 'panel-allergy-biologic', title: `Biologic (${allergyData.biologic.length})`,
                content: {content: (<div className={"dataList"}>{allergyData.biologic}</div>)} },
            { key: 'panel-allergy-unclassified', title: `Unclassified (${allergyData.unclassified.length})`,
                content: {content: (<div className={"dataList"}>{allergyData.unclassified}</div>)} },
        ]

        const AllergyIntoleranceContent = (
            <div>
                <Accordion.Accordion panels={AllergyIntolerancePanels} />
            </div>
        )
        //=============================================--Medication--===================================================
        const MedicationPanels = [
            { key: 'panel-medication-request', title: 'MedicationRequest', content: 'Level 1A Contents' },
        ]

        const MedicationContent = (
            <div>
                <Accordion.Accordion panels={MedicationPanels} />
            </div>
        )
        //==============================================--Condition--===================================================
        const ConditionPanels = [
            { key: 'panel-condition', title: 'Condition', content: 'Level 1A Contents' },
        ]

        const ConditionContent = (
            <div>
                <Accordion.Accordion panels={ConditionPanels} />
            </div>
        )
        //==============================================--Procedure--===================================================
        const ProcedurePanels = [
            { key: 'panel-procedure', title: 'Procedure', content: 'Level 1A Contents' },
        ]

        const ProcedureContent = (
            <div>
                <Accordion.Accordion panels={ProcedurePanels} />
            </div>
        )
        //=============================================--Diagnostic Report--============================================
        const DiagnosticReportPanels = [
            { key: 'panel-diagnostic-report', title: 'Diagnostic Report', content: 'Level 1A Contents' },
        ]

        const DiagnosticReportContent = (
            <div>
                <Accordion.Accordion panels={DiagnosticReportPanels} />
            </div>
        )
        //==============================================--Observation--=================================================
        const table = "";

        const observationPanels = [
            { key: 'panel-observation-vitals', title: 'Vitals', content: {content: (table)}},
            { key: 'panel-observation-laboratory', title: 'Laboratory', content: {content: (<Button>Test</Button>) }},
            { key: 'panel-observation-imaging', title: 'Imaging', content: 'Level 2A Contents' },
            { key: 'panel-observation-procedure', title: 'Procedure', content: 'Level 2A Contents' },
            { key: 'panel-observation-survey', title: 'Survey', content: 'Level 2A Contents' },
            { key: 'panel-observation-unclassified', title: 'Unclassified', content: 'Level 2B Contents'},
        ]

        const ObservationContent = (
            <div>
                <Accordion.Accordion panels={observationPanels} />
            </div>
        )
        //==============================================================================================================
        const rootPanels = [
            { key: 'panel-1', title: `AllergyIntolerance (${allergyData.food.length + 
                allergyData.medication.length + allergyData.environment.length + allergyData.biologic.length +
                allergyData.unclassified.length})`, 
                content: { content: AllergyIntoleranceContent } },
            { key: 'panel-2', title: 'Observation', content: { content: ObservationContent } },
            { key: 'panel-3', title: 'MedicationRequest', content: { content: MedicationContent } },
            { key: 'panel-4', title: 'DiagnosticReport', content: { content: DiagnosticReportContent } },
            { key: 'panel-5', title: 'Procedure', content: { content: ProcedureContent } },
            { key: 'panel-6', title: 'Condition', content: { content: ConditionContent } },
        ]

        setRootPanels(rootPanels);

    }, [searchText]);

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