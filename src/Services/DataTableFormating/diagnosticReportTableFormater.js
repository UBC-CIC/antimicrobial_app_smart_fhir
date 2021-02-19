import React from 'react';
import { Table, Grid } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';



const diagnosticReportTableFormater = (diagnostics) => {


    let rows = diagnostics.map(diagnostic => {


        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
                <Grid>
                    <Grid.Row style={{paddingBottom: "0px"}}>
                        <Grid.Column>
                            <span style={{color: "gray"}}>Code, Display: </span> {diagnostic.details}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "0px", paddingBottom: "0px"}}>
                        <Grid.Column>
                            <span style={{color: "gray"}}>System: </span> {diagnostic.system}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "0px"}}>
                        <Grid.Column>
                            <span style={{color: "gray"}}>Result: </span> {diagnostic.result}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell>
                {(diagnostic.timestamp)? diagnostic.timestamp.toLocaleString() : "Not Available"}
            </Table.Cell>
        </Table.Row>)
    })

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Details</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default diagnosticReportTableFormater;