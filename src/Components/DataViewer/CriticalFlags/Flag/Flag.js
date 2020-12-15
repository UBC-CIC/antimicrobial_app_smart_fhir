import React from 'react';
import {Grid} from "semantic-ui-react";
import { withDisclosureManager, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import AllergyModal from "../Allergy/AllergyModal/AllergyModal";
import AntibioticsModal from "../Antibiotics/AntibioticsModal/AntibioticsModal";
import DiseaseModal from "../Disease/DiseaseModal/DiseaseModal";
import "./Flag.css";


const Flag = (props) => {
    const {title, content, type, modalData, alert, disclosureManager} = props;
    let modal =
        <div>
            <DisclosureManagerHeaderAdapter
                title="Test Modal Component"
            />
        This is a test modal
        </div>;

    switch (type) {
        case "allergy": {
            modal = <AllergyModal allergies={modalData} />
            break;
        }
        case "antibiotic": {
            modal = <AntibioticsModal antibiotics={modalData} />
            break;
        }
        case "disease": {
            modal = <DiseaseModal diseases={modalData} />
            break;
        }
        case "organism": {
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
        <div className={(alert)? "flagContainerAlert" : "flagContainerNonAlert"}
        onClick={handleModalPopup}
        >
            <Grid>
                <Grid.Row style={{paddingBottom: "0px"}}>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                        <span className={"flagHeader"}>{title}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingTop: "0px"}}>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                        {content}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}


export default withDisclosureManager(Flag);