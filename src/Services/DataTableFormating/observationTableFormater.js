import React from 'react';
import { Table } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';



const observationTableFormater = (observations) => {


    let rows = observations.map(observation => {
        if (observation.component) {
            observation.value = observation.component;
        } else if (observation.interpretation) {
            observation.value = observation.interpretation;
        }
        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
                <pre>{JSON.stringify(observation.code, null, 2)}</pre>
            </Table.Cell>
            <Table.Cell>
                <pre>{JSON.stringify(observation.value, null, 2)}</pre>
            </Table.Cell>
            <Table.Cell>
                <pre>{JSON.stringify(observation.timestamp.toLocaleString(), null, 2)}</pre>
            </Table.Cell>
        </Table.Row>)
    })

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table>
    );

}

export default observationTableFormater;