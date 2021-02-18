import React from 'react';
import {Grid, Table} from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';



const procedureTableFormater = (procedures) => {


    let rows = procedures.map(procedure => {


        return (<Table.Row key={uuidv4()}>
            <Table.Cell>
                <Grid>
                    <Grid.Row style={{paddingBottom: "0px"}}>
                        <Grid.Column>
                            <span style={{color: "gray"}}>Code, Display: </span> {procedure.details}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "0px"}}>
                        <Grid.Column>
                            <span style={{color: "gray"}}>System: </span> {procedure.system}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell>
                {procedure.performed}
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

export default procedureTableFormater;