import React from 'react';
import {Grid } from "semantic-ui-react";
import Table from 'terra-table';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';


const OrganismModal = (props) => {
    const {organisms} = props;
    console.log("organism Data: ", organisms);
    let tableData = [];
    let rows = {};
    let rowData = [];
    organisms.forEach((organism, index) => {
        let description = "N/A";
        let results = "N/A";
        let timestamp = "N/A";

        if (organism.description) {
            description = organism.description;
        }

        if (organism.timestamp) {
            timestamp = organism.timestamp.toLocaleString();
        }

        if (organism.testResults) {
            let listItems = organism.testResults.map((entry) => {
                return <li>{entry.medication}: <span style={{color: "red"}}>{entry.testResult}</span></li>
            });
            results = <ul style={{listStyleType: "none"}}>
                {listItems}
            </ul>
        }


        let entry = {
            key: index.toString(),
            cells: [
                { key: 'cell-0', children: description },
                { key: 'cell-1', children: timestamp},
                { key: 'cell-2', children: results},
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
                        title="Resistant Organisms"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <Table
                        summaryId="organisms-table"
                        summary="This table contains details about the patient's organisms."
                        cellPaddingStyle="compact"
                        numberOfColumns={1}
                        dividerStyle="horizontal"
                        headerData={{
                            cells: [
                                { id: 'header-description', key: 'description', children: 'Description' },
                                { id: 'header-date', key: 'date', children: 'Date' },
                                { id: 'header-results', key: 'results', children: 'Results' },
                            ],
                        }}
                        bodyData={tableData}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default OrganismModal;