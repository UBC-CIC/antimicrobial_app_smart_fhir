import React from 'react';
import {Grid} from "semantic-ui-react";
import Table from 'terra-table';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';


const AllergyModal = (props) => {
    const {allergies} = props;
    console.log("allergies Data: ", allergies);
    let tableData = [];
    let rows = {};
    let rowData = [];
    allergies.forEach((allergy, index) => {
        let reaction = "N/A"
        let severity = allergy.criticality;
        if (allergy.reaction) {
            reaction = allergy.reaction.reaction;
            severity = allergy.reaction.severity;
        }
        let date = "Unknown";
        if (allergy.date) {
            date = new Date(allergy.date).toLocaleString();
        }

        let entry = {
            key: index.toString(),
                cells: [
                    { key: 'cell-0', children: allergy.description },
                    { key: 'cell-1', children: reaction},
                    { key: 'cell-2', children: severity },
                    { key: 'cell-3', children: date },
                    { key: 'cell-4', children: allergy.clinicalStatus },
                    { key: 'cell-5', children: allergy.verification },
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
                        title="Known Medication Allergies"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <Table
                        summaryId="compact-table"
                        summary="This table has compact row padding."
                        cellPaddingStyle="compact"
                        numberOfColumns={1}
                        dividerStyle="horizontal"
                        headerData={{
                            cells: [
                                { id: 'header-description', key: 'description', children: 'Description' },
                                { id: 'header-reaction', key: 'reaction', children: 'Reaction' },
                                { id: 'header-severity', key: 'severity', children: 'Severity' },
                                { id: 'header-date', key: 'date', children: 'Date' },
                                { id: 'header-active', key: 'active', children: 'Active?' },
                                { id: 'header-verified', key: 'verified', children: 'Verified?' },
                            ],
                        }}
                        bodyData={tableData}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default AllergyModal;