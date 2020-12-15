import React from 'react';
import {Grid} from "semantic-ui-react";
import Table from 'terra-table';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';


const DiseaseModal = (props) => {
    const {diseases} = props;
    console.log("disease Data: ", diseases);
    let tableData = [];
    let rows = {};
    let rowData = [];
    diseases.forEach((disease, index) => {
        let description = "N/A";
        let onsetDate = "N/A";
        let verified = "N/A";
        let status = "N/A";

        if (disease.description) {
            description = disease.description;
        }

        if (disease.onsetDate) {
            onsetDate = disease.onsetDate.toLocaleString();
        }

        if (disease.verified) {
            verified = disease.verified;
        }

        if (disease.status) {
            status = disease.status;
        }

        let entry = {
            key: index.toString(),
            cells: [
                { key: 'cell-0', children: description },
                { key: 'cell-1', children: onsetDate},
                { key: 'cell-2', children: status },
                { key: 'cell-3', children: verified },
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
                        title="Known Conditions"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <Table
                        summaryId="diseases-table"
                        summary="This table contains details about the patient's diseases."
                        cellPaddingStyle="compact"
                        numberOfColumns={1}
                        dividerStyle="horizontal"
                        headerData={{
                            cells: [
                                { id: 'header-description', key: 'description', children: 'Description' },
                                { id: 'header-onsetDate', key: 'onsetDate', children: 'Onset Date' },
                                { id: 'header-status', key: 'status', children: 'Status' },
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

export default DiseaseModal;