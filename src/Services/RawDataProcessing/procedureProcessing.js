

const procedureProcessing = (procedures) => {
    let processedData = [];

    for (let procedure of procedures) {
        let data;
        let timestamp = new Date();

        try {

            let resource = procedure.resource;
            data = procedure.resource;

            if (resource.performedPeriod) {
                if (resource.performedPeriod) {
                    timestamp = new Date(resource.performedPeriod.start);

                }
            } else if (resource.performedDateTime) {
                timestamp = new Date(resource.performedDateTime);
            }

        } catch (e) {

        }

        let procedureEntry = {
            timestamp: timestamp,
            data: data
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