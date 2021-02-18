const conditionProcessing = (conditions) => {
    let processedData = [];
    conditions.forEach(condition => {
        let timestamp = new Date(); // set current date as default if no date is given
        let description;
        let status;
        let verification;

        try {
            if (condition.resource.onsetDateTime) {
                timestamp = new Date(condition.resource.onsetDateTime);
            } else if (condition.resource.recordedDate) {
                timestamp = new Date(condition.resource.recordedDate);
            } else if (condition.resource.abatementDateTime) {
                timestamp = new Date(condition.resource.abatementDateTime);
            }

            if (condition.resource.code) {
                if (condition.resource.code.text) {
                    description = condition.resource.code.text;
                } else if (condition.resource.code.coding) {
                    if (condition.resource.code.coding[0].display) {
                        description = condition.resource.code.coding[0].display
                    } else {
                        description = condition.resource.code.coding[0].code;
                    }
                }
            }

            if (condition.resource.clinicalStatus) {
                if (condition.resource.clinicalStatus.text) {
                    status = condition.resource.clinicalStatus.text;
                } else if (condition.resource.clinicalStatus.coding) {
                    if (condition.resource.clinicalStatus.coding[0].display) {
                        status = condition.resource.clinicalStatus.coding[0].display;
                    } else {
                        status = condition.resource.clinicalStatus.coding[0].code;
                    }
                }
            }

            if (condition.resource.verificationStatus) {
                if (condition.resource.verificationStatus.text) {
                    verification = condition.resource.verificationStatus.text;
                } else if (condition.resource.verificationStatus.coding) {
                    if (condition.resource.verificationStatus.coding[0].display) {
                        verification = condition.resource.verificationStatus.coding[0].display;
                    } else {
                        verification = condition.resource.verificationStatus.coding[0].code;
                    }
                }
            }


        } catch (err) {

        }

        let disease = {
            timestamp: timestamp,
            condition: description,
            status: status,
            verification: verification,
        }
        processedData.push(disease);
    })
    try {
        processedData.sort((a, b) => {
            return Date.parse(b.timestamp) - Date.parse(a.timestamp);
        });
    } catch (e) {

    }


    return processedData;
}

export default conditionProcessing;