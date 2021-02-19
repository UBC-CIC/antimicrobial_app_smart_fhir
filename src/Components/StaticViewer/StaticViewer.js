import React, {useState} from 'react';
import {Grid, Button, Input} from "semantic-ui-react";
import DocumentView from "./Documents/DocumentView";
import ResultView from "./Results/ResultView";
import "./StaticViewer.css";



const StaticViewer = (props) => {
    const [mode, setMode] = useState("Results");

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
                                    <Button
                                    active={(mode === "Documents")}
                                    onClick={() => setMode("Documents")}
                                    >
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                                    <strong>Documents</strong>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Button>
                                    <Button
                                    active={(mode === "Results")}
                                    onClick={() =>  setMode("Results")}
                                    >
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
                        {(mode === "Documents")? <DocumentView /> : <ResultView/>}
                    </Grid>
                </Grid.Column>
                <Grid.Column width={1} />
            </Grid.Row>
        </Grid>
    )
}


export default StaticViewer;