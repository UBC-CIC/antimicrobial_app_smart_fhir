import React from 'react';
import {Grid} from "semantic-ui-react";
import Table from 'terra-table';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';


const AntibioticsModal = (props) => {
    const {antibiotics} = props;
    console.log("antibiotics Data: ", antibiotics);
    let tableData = [];
    let rows = {};
    let rowData = [];
    try { // in try catch block since not all entries have dates, which will throw an error
        antibiotics.sort((a,b) => b.startDate - a.startDate);
    } catch (err) {

    }
    antibiotics.forEach((antibiotic, index) => {
       let description = "N/A";
       let startDate = "N/A";
       let endDate = "N/A";
       let dosage = "N/A";
       let status = "N/A";

       if (antibiotic.description) {
           description = antibiotic.description;
       }

       if (antibiotic.startDate) {
           startDate = antibiotic.startDate.toLocaleString();
       }

       if (antibiotic.endDate) {
           endDate = antibiotic.endDate.toLocaleString();
       }

       if (antibiotic.dosage) {
           dosage = antibiotic.dosage;
       }

       if (antibiotic.status) {
           status = antibiotic.status;
       }

        let entry = {
            key: index.toString(),
            cells: [
                { key: 'cell-0', children: description },
                { key: 'cell-1', children: dosage},
                { key: 'cell-2', children: startDate },
                { key: 'cell-3', children: endDate },
                { key: 'cell-4', children: status },
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
                        title="Recent Antibiotics"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <Table
                        summaryId="antibiotics-table"
                        summary="This table contains details about the antibiotics the patient has taken."
                        cellPaddingStyle="compact"
                        numberOfColumns={1}
                        dividerStyle="horizontal"
                        headerData={{
                            cells: [
                                { id: 'header-description', key: 'description', children: 'Description' },
                                { id: 'header-dosage', key: 'dosage', children: 'Dosage' },
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

export default AntibioticsModal;