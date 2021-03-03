import React from 'react';
import {Grid} from "semantic-ui-react";
import Table from 'terra-table';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';


const ProcedureWarningModal = (props) => {
    const {procedures} = props;

    let tableData = [];
    let rows = {};
    let rowData = [];
    try { // in try catch block since not all entries have dates, which will throw an error
        procedures.sort((a,b) => b.startDate - a.startDate);
    } catch (err) {

    }
    procedures.forEach((procedure, index) => {
        let description = "N/A";
        let startDate = "N/A";
        let endDate = "N/A";
        let status = "N/A";

        if (procedure.description) {
            description = procedure.description;
        }

        if (procedure.startDate) {
            startDate = procedure.startDate.toLocaleString();
        }

        if (procedure.endDate) {
            endDate = procedure.endDate.toLocaleString();
        }

        if (procedure.status) {
            status = procedure.status;
        }

        let entry = {
            key: index.toString(),
            cells: [
                { key: 'cell-0', children: description },
                { key: 'cell-1', children: startDate },
                { key: 'cell-2', children: endDate },
                { key: 'cell-3', children: status },
            ],
        }
        rowData.push(entry);
    });
    rows.rows = rowData;
    tableData.push(rows);

    return(
        <Grid>
            <Grid.Row style={{paddingBottom: "0px"}} >
                <Grid.Column>
                    <DisclosureManagerHeaderAdapter
                        title="Procedure Warning"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                    <h3 style={{color: "red"}}>The following procedures are missing date information
                        and may not be represented correctly or at all in the chart.</h3>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <Table
                        summaryId="procedure-warning-table"
                        summary="This table contains details about undocumented procedures."
                        cellPaddingStyle="compact"
                        numberOfColumns={1}
                        dividerStyle="horizontal"
                        headerData={{
                            cells: [
                                { id: 'header-description', key: 'description', children: 'Description' },
                                { id: 'header-startDate', key: 'startDate', children: 'Start Date' },
                                { id: 'header-endDate', key: 'endDate', children: 'End Date' },
                                { id: 'header-status', key: 'active', children: 'Status' },
                            ],
                        }}
                        bodyData={tableData}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default ProcedureWarningModal;