import React from 'react';
import { Table } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';



const conditionTableFormater = (conditions) => {


    let rows = conditions.map(condition => {


        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
                {condition.condition}
            </Table.Cell>
            <Table.Cell>
                {condition.status}
            </Table.Cell>
            <Table.Cell>
                {condition.verification}
            </Table.Cell>
            <Table.Cell>
                {(condition.timestamp)? condition.timestamp.toLocaleString() : "Not Available"}
            </Table.Cell>
        </Table.Row>)
    })

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Condition</Table.HeaderCell>
                    <Table.HeaderCell>Clinical Status</Table.HeaderCell>
                    <Table.HeaderCell>Verification Status</Table.HeaderCell>
                    <Table.HeaderCell>Onset Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default conditionTableFormater;