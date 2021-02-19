import React from 'react';
import { Table } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';



const medicationTableFormater = (medications) => {


    let rows = medications.map(medication => {


        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
                {medication.details}
            </Table.Cell>
            <Table.Cell>
                {(medication.timestamp)? medication.timestamp.toLocaleString() : "Not Available"}
            </Table.Cell>
        </Table.Row>)
    })

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default medicationTableFormater;