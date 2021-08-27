import React from 'react';
import {Grid} from "semantic-ui-react";
import { v4 as uuidv4 } from 'uuid';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import {Auth} from "aws-amplify";
import {Signer} from "@aws-amplify/core";
const axios = require('axios');


const CreateAllergyModal = (props) => {
    const {patientID} = props;
    // Hardcoded example (temporary)
    // TODO
    let patient_id = "7be33b47-d5ae-4c7a-83ee-2bbe8f439a92";
    let string = {"resourceType":"AllergyIntolerance",
        "id": uuidv4(),
        "meta":{"versionId":"1","lastUpdated":"2021-05-31T02:58:19.000+00:00","source":"#LKfj5fusAw02I92q"},
        "text":{"status":"generated","div":"<div xmlns=\"http://www.w3.org/1999/xhtml\">Sulfa antibiotics allergy</div>"},
        "clinicalStatus":
            {"coding":[{"system":"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical","code":"active"}]},
        "verificationStatus":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification","code":"confirmed"}]},
        "code":{"coding":[{"system":"http://snomed.info/sct","code":"716186003","display":"Sulfa antibiotics allergy"}],"text":"Sulfa antibiotics allergy"},
        "patient":{"reference": "Patient/" + patient_id }};

    const createAllergyRecord = async (allergyRecord) => {
        try {
            let endpointPath = process.env.REACT_APP_HealthLake_Endpoint + "AllergyIntolerance/";
            let credentials = await Auth.currentCredentials();

            let allergyCreationURL = Signer.signUrl(endpointPath, {
                access_key: credentials.accessKeyId,
                secret_key: credentials.secretAccessKey,
                session_token: credentials.sessionToken,
            })

            let allergyAdded = await axios.post(allergyCreationURL, allergyRecord);
            console.log("allergy creation response", allergyAdded);
        } catch (e) {
            console.log("Allergy creation error: ", e);
        }
    }

    return(
        <Grid>
            <Grid.Row style={{paddingBottom: "0px"}} >
                <Grid.Column>
                    <DisclosureManagerHeaderAdapter
                        title="Create Allergy Entry"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: "0px"}}>
                <Grid.Column>
                    <button onClick={() => createAllergyRecord(string)}>Submit</button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default CreateAllergyModal;