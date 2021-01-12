import React, {useState} from 'react';
import {Grid, Button, Input} from "semantic-ui-react";
import DatePicker from 'terra-date-picker';
import {connect} from "react-redux";
import "./StaticViewer.css";



const StaticViewer = (props) => {
    const {graphDateStart, graphDateEnd} = props;
    const [startDate, setStartDate] = useState(graphDateStart);
    const [endDate, setEndDate] = useState(graphDateEnd);

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

    return(
        <Grid style={{height: "100%"}}>
            <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={14} textAlign={"center"} verticalAlign={"middle"}>
                    <Grid className={"staticDisplayContainer"}>
                        <Grid.Row className={"staticDisplayHeader"}>
                            <Grid.Column textAlign={"left"} style={{marginLeft: "2.00%"}}>
                                <span className={"staticDisplayTitle"}><strong>Static Display</strong></span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingBottom: "3px"}}>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                <Button.Group fluid>
                                    <Button>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                                    <strong>Documents</strong>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Button>
                                    <Button>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                                    <strong>Results</strong>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Button>
                                </Button.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingTop: "0px"}}>
                            <Grid.Column width={3} textAlign={"left"} verticalAlign={"middle"}>
                                <Input
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search...'
                                    inverted
                                />
                            </Grid.Column>
                            <Grid.Column width={5} verticalAlign={"middle"}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <span>
                                            <Button size={"mini"} basic className={"documentOptionButton"}>
                                            ID Consults
                                         </Button>
                                            <Button size={"mini"} basic className={"documentOptionButton"}>
                                                Imaging
                                            </Button>
                                             <Button size={"mini"} basic className={"documentOptionButton"}>
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
                    </Grid>
                </Grid.Column>
                <Grid.Column width={1} />
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        graphDateStart: state.patientData.graphDataStartDate,
        graphDateEnd: state.patientData.graphDataEndDate,
    };
};

export default connect(mapStateToProps, null)(StaticViewer);