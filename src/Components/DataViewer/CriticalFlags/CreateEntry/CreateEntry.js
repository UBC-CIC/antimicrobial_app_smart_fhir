import React from 'react';
import {Button} from "semantic-ui-react";
import { withDisclosureManager, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import CreateAllergyModal from "./Allergy/CreateAllergyModal";


const CreateEntry = (props) => {
    const {type, patientID, disclosureManager} = props;
    let patient_id = "05016305-3904-4b36-85da-17e6150998ff";
    let modal =
        <div>
            <DisclosureManagerHeaderAdapter
                title="Create Entry Test Modal Component"
            />
            Create Entry Test Modal: TODO
        </div>;

    switch (type) {
        case "allergy": {
            modal = <CreateAllergyModal patientID={patient_id} />
            break;
        }
        case "antibiotic": {

            break;
        }
        case "disease": {

            break;
        }
        default:
            break;
    }

    const handleModalPopup = () => {
        disclosureManager.disclose({
            preferredType: 'modal',
            size: 'medium',
            content: {
                key: 'modal-component-instance',
                component: modal
            }
        });
    }


    return(
            <Button size={"mini"} onClick={handleModalPopup}>
                Add
            </Button>
    );
}


export default withDisclosureManager(CreateEntry);