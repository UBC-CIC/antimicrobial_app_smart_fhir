

const procedureProcessing = (procedures) => {
    let processedData = [];

    for (let procedure of procedures) {

        let timestamp = new Date();
        let performed = "";
        let system;
        let details;

        try {

            if (procedure.resource.code) {
                if (procedure.resource.code.text) {
                    details = procedure.resource.code.text;
                } else if (procedure.resource.code.coding) {
                    if (procedure.resource.code.coding[0].display) {
                        details = procedure.resource.code.coding[0].display;
                    } else {
                        details = procedure.resource.code.coding[0].code;
                        system = procedure.resource.code.coding[0].system;
                    }
                }
            }


            if (procedure.resource.performedDateTime) {
                timestamp = new Date(procedure.resource.performedDateTime);
                performed = new Date(procedure.resource.performedDateTime).toLocaleString();
            } else if (procedure.resource.performedPeriod) {
                if (procedure.resource.performedPeriod.start) {
                    timestamp = new Date(procedure.resource.performedPeriod.start);
                    performed = "Start: " + new Date(procedure.resource.performedPeriod.start).toLocaleString() + " ";
                    if (procedure.resource.performedPeriod.end) {
                        performed += "End: " + new Date(procedure.resource.performedPeriod.end).toLocaleString();
                    }
                } else if (procedure.resource.performedPeriod.end) {
                    timestamp = new Date(procedure.resource.performedPeriod.end);
                }
            }

            if (!system) {
                system = "Not Available";
            }

        } catch (e) {

        }

        let procedureEntry = {
            timestamp: timestamp,
            performed: performed,
            details: details,
            system: system
        }
        processedData.push(procedureEntry);
    }

    try { // attempt to to sort, handle against invalid timestamp
        processedData.sort((a, b) => {
            return Date.parse(b.timestamp) - Date.parse(a.timestamp);
        });
    } catch (e) {

    }

    return processedData;
}

export default procedureProcessing;