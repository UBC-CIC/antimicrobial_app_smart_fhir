

const medicationProcessing = (medications) => {
    let processedData = [];
    for (let medicine of medications) {
        let timestamp;
        let details;

        try {

            if (medicine.resource.medicationCodeableConcept) {
                if (medicine.resource.medicationCodeableConcept.text) {
                    details = medicine.resource.medicationCodeableConcept.text;
                } else if (medicine.resource.medicationCodeableConcept.coding) {
                    if (medicine.resource.medicationCodeableConcept.coding[0].display) {
                        details = medicine.resource.medicationCodeableConcept.coding[0].display
                    }
                }
            }

            if (medicine.resource.authoredOn) {
                timestamp = new Date(medicine.resource.authoredOn);
            } else if (medicine.resource.dosageInstruction) {
                if (medicine.resource.dosageInstruction[0].timing) {
                    if (medicine.resource.dosageInstruction[0].timing.repeat) {
                        if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                            timestamp = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start);
                        }
                    } else if (medicine.resource.dosageInstruction[0].timing.event) {
                        timestamp = new Date(medicine.resource.dosageInstruction[0].timing.event);
                    }
                }
            }

            if (!timestamp) {
                if (medicine.resource.meta) {
                    if (medicine.resource.meta.lastUpdated) {
                        timestamp = new Date(medicine.resource.meta.lastUpdated);
                    }
                }

                if (!timestamp) {
                    timestamp = new Date();
                }
            }

        } catch (e) {

        }
        let formattedMedication = {
            timestamp: timestamp,
            details: details,
        }
        processedData.push(formattedMedication);
    }
    try { // attempt to to sort, handle against invalid timestamp
        processedData.sort((a, b) => {
            return Date.parse(b.timestamp) - Date.parse(a.timestamp);
        });
    } catch (e) {

    }
    return processedData;
}

export default medicationProcessing;