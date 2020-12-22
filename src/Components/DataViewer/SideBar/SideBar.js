import {Grid, Segment, Sidebar, Divider, Button, Label, Icon} from "semantic-ui-react";
import {connect} from "react-redux";
import React, { useState, useEffect } from "react";
import {setGraphToDisplay} from "../../../Actions/patientContextActions";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Radio from 'terra-form-radio';


const VerticalSidebar = (props) => {
    const [graphToDisplay, setGraph] = useState("temperature");
    const [dateOpen, setDateOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date("2000-01-01T00:00:00.000Z"));
    const [disabledGraphs, setDisabled] = useState({
        wbc: true,
        crp: true,
        procalcitonin: true,
        temperature: true,
        bloodPressure: true,
        heartRate: true,
        respiratoryRate: true,
        oxygenSat: true,
        oxygenMode: true,
        imaging: true,
        procedures: true,
    })

    useEffect(() => {
        let wbc = true;
        let crp = true;
        let procalcitonin = true;
        let temperature = true;
        let bloodPressure = true;
        let heartRate = true;
        let respiratoryRate = true;
        let oxygenSat = true;
        let oxygenMode = true;
        let imaging = true;
        let procedures = true;


        if (props.availableData.temperature.length > 0) {
            temperature = false;
        }
        if (props.availableData.bloodPressure.length > 0) {
           bloodPressure = false;
        }

        setDisabled({
            wbc: wbc,
            crp: crp,
            procalcitonin: procalcitonin,
            temperature: temperature,
            bloodPressure: bloodPressure,
            heartRate: heartRate,
            respiratoryRate: respiratoryRate,
            oxygenSat: oxygenSat,
            oxygenMode: oxygenMode,
            imaging: imaging,
            procedures: procedures,
        })

    }, [props.availableData.bloodPressure.length, props.availableData.temperature.length])

    useEffect(() => {
        setGraph(props.defaultGraph);
    }, [props.defaultGraph]);

    useEffect(() => {
        // when date changes, call action to update date

    }, [selectedDate])

    const onSelectGraph = (e) => {
        const {setGraphToDisplay} = props;
        setGraphToDisplay(e.target.value);
    }


    return (
        <Sidebar
            animation={"scale down"}
            direction={"left"}
            icon='labeled'
            inverted={"true"}
            vertical={"true"}
            visible={props.visible}
            width='thin'
            style={{backgroundColor: "whitesmoke"}}
        >
            <Segment basic>
                <Grid>
                    <Grid.Row style={{paddingBottom: "0px"}}>
                        <Grid.Column textAlign={"left"}>
                            <span><strong>Graphing Options</strong></span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "0px"}}>
                        <Grid.Column>
                            <span style={{fontSize: "14px"}}></span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid>
                                <Grid.Row style={{paddingBottom: "0px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>WBC</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="wbc" value={"wbc"} labelText="WBC" isLabelHidden name="multiple-group"
                                               defaultChecked={(graphToDisplay === "wbc")} disabled={disabledGraphs.wbc}
                                               onChange={onSelectGraph}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>CRP</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="crp" value={"crp"} labelText="CRP" isLabelHidden name="multiple-group"
                                               defaultChecked={(graphToDisplay === "crp")} disabled={disabledGraphs.crp}
                                               onChange={onSelectGraph}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Procalcitonin</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="procalcitonin" value={"procalcitonin"} labelText="Procalcitonin" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "procalcitonin")}
                                               disabled={disabledGraphs.procalcitonin} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Temperature</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="temperature" value={"temperature"} labelText="Temperature" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "temperature")}
                                               disabled={disabledGraphs.temperature} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Blood Pressure</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="bloodPressure" value={"bloodPressure"} labelText="Blood Pressure" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "bloodPressure")}
                                               disabled={disabledGraphs.bloodPressure} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Heart Rate</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="heartRate" value={"heartRate"} labelText="Heart Rate" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "heartRate")}
                                               disabled={disabledGraphs.heartRate} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Respiratory Rate</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="respiratoryRate" value={"respiratoryRate"} labelText="Respiratory Rate" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "respiratoryRate")}
                                               disabled={disabledGraphs.respiratoryRate} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Oxygen Sat</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="oxygenSat" value={"oxygenSat"} labelText="Oxygen Sat" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "oxygenSat")}
                                               disabled={disabledGraphs.oxygenSat} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Oxygen Mode</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="oxygenMode" value={"oxygenMode"} labelText="Oxygen Mode" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "oxygenMode")}
                                               disabled={disabledGraphs.oxygenMode} onChange={onSelectGraph}/>
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Imaging</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="imaging" value={"imaging"} labelText="Imaging" isLabelHidden name="multiple-group"
                                               defaultChecked={(graphToDisplay === "imaging")}
                                               disabled={disabledGraphs.imaging} onChange={onSelectGraph} />
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingBottom: "0px", paddingTop: "6px"}}>
                                    <Grid.Column width={11} textAlign={"left"} verticalAlign={"middle"}>
                                        <span style={{fontSize: "10px"}}>Procedures</span>
                                    </Grid.Column>
                                    <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                        <Radio id="procedures" value={"procedures"} labelText="Procedures" isLabelHidden
                                               name="multiple-group" defaultChecked={(graphToDisplay === "procedures")}
                                               disabled={disabledGraphs.procedures} onChange={onSelectGraph}/>
                                    </Grid.Column>
                                    <Grid.Column width={2}/>
                                </Grid.Row>
                                <Grid.Row style={{paddingTop: "3px", paddingBottom: "5px"}}>
                                    <Grid.Column>
                                        <Divider/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{padding: "0px"}}>
                                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}
                                                 style={{paddingLeft: "22px", paddingBottom: "0px", paddingTop: "0px"}}
                                    >
                                        <span style={{fontSize: "11px"}}>Start Date:</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{padding: "0px"}}>
                                    <Grid.Column>
                                        <Button as='div' labelPosition='left' size='mini'>
                                            <Label as='a' basic pointing='right'  style={{paddingLeft: "3px", paddingRight: "5px"}}>
                                                <span style={{fontSize: "10px"}}>{selectedDate.toLocaleDateString()}</span>
                                            </Label>
                                            <Button animated size='mini' onClick={() => setDateOpen(true)}>
                                                <Button.Content hidden>Date</Button.Content>
                                                <Button.Content visible>
                                                    <Icon name='calendar alternate outline' />
                                                </Button.Content>
                                            </Button>
                                        </Button>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker
                                                open={dateOpen}
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                onClose={() => setDateOpen(false)}
                                                TextFieldComponent={() => null}
                                                disableFuture={true}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Sidebar>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.appState.loadingPatientData,
        availableData: state.patientData.graphingData,
        defaultGraph: state.patientData.graphToDisplay,
        patient: state.patientData.currentPatient,
    };
};


export default connect(mapStateToProps, {setGraphToDisplay})(VerticalSidebar);