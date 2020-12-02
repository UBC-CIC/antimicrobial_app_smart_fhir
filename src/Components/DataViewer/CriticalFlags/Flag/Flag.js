import React, { useState, useEffect } from 'react';
import {Grid} from "semantic-ui-react";
import { withDisclosureManager, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import AllergyModal from "../Allergy/AllergyModal/AllergyModal";



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
            break;
        }
        case "disease": {
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
                key: 'modal-component-a-instance',
                component: modal
            }
        });
    }


    const alertStyle = {border: "3px solid #e6bebe", backgroundColor: "#e6bebe", height: "120px", borderRadius: "10px", overflowY: "auto", overflowX: "hidden"};
    const nonAlertStyle = {border: "3px solid lightgray", backgroundColor: "lightgray", height: "120px", borderRadius: "10px", overflowY: "auto",  overflowX: "hidden"};


    return(
        <div style={(alert)? alertStyle : nonAlertStyle} className={"flagContainer"}
        onClick={handleModalPopup}
        >
            <Grid>
                <Grid.Row style={{paddingBottom: "0px"}}>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                        <span style={{fontSize: "18px"}}><strong>{title}</strong></span>
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