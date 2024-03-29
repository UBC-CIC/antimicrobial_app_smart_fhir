import React from 'react';
import { Table, Grid } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';




const allergyTableFormater = (allergies) => {

    let rows = allergies.map(allergy => {
        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
               {allergy.description}
            </Table.Cell>
            <Table.Cell>
                {allergy.criticality}
            </Table.Cell>
            <Table.Cell>
                <Grid>
                    <Grid.Row style={{padding: "0px"}}>
                        <Grid.Column>
                            reaction: {allergy.reaction.reaction}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: "0px"}}>
                        <Grid.Column>
                            severity: {allergy.reaction.severity}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell>
                {(allergy.date)? allergy.date.toLocaleDateString() : "Not Available"}
            </Table.Cell>
            <Table.Cell>
               {allergy.verification}
            </Table.Cell>
            <Table.Cell>
                {allergy.clinicalStatus}
            </Table.Cell>
        </Table.Row>)
    })

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Criticality</Table.HeaderCell>
                    <Table.HeaderCell>Reaction</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Verification</Table.HeaderCell>
                    <Table.HeaderCell>Clinical Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default allergyTableFormater;