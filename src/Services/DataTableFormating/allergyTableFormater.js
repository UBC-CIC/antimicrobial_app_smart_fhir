import React from 'react';
import { Table } from 'semantic-ui-react';
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
                <pre>{JSON.stringify(allergy.reaction, null, 2)}</pre>
            </Table.Cell>
            <Table.Cell>
                {allergy.date.toLocaleDateString()}
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
                    <Table.HeaderCell singleLine>Clinical Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default allergyTableFormater;