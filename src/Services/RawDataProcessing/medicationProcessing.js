

const medicationProcessing = (medications) => {
    let processedData = [];
    for (let medicine of medications) {
        let timestamp = new Date();
        try {
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

        } catch (e) {

        }
        let formattedMedication = {
            timestamp: timestamp,
            data: medicine.resource,
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