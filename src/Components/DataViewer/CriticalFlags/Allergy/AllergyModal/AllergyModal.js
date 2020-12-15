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
        let description = "N/A";
        let reaction = "N/A";
        let severity = "N/A";
        let date = "N/A";
        let status = "N/A";
        let verification = "N/A";
        if (allergy.description) {
            description = allergy.description;
        }
        if (allergy.criticality) {
            severity = allergy.criticality;
        }
        if (allergy.reaction) {
            reaction = allergy.reaction.reaction;
            if (allergy.reaction.severity) {
                severity = allergy.reaction.severity;
            }
        }
        if (allergy.date) {
            date = new Date(allergy.date).toLocaleString();
        }
        if (allergy.clinicalStatus) {
            status = allergy.clinicalStatus;
        }
        if (allergy.verification) {
            verification = allergy.verification;
        }

        let entry = {
            key: index.toString(),
                cells: [
                    { key: 'cell-0', children: description },
                    { key: 'cell-1', children: reaction},
                    { key: 'cell-2', children: severity },
                    { key: 'cell-3', children: date },
                    { key: 'cell-4', children: status },
                    { key: 'cell-5', children: verification },
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
                        summaryId="allergy-table"
                        summary="This tables contains details about the patient's antibiotic allergies."
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