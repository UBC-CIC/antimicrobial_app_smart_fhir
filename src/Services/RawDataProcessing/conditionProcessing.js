const conditionProcessing = (conditions) => {
    let processedData = [];
    conditions.forEach(condition => {
        let timestamp = new Date(); // set current date as default if no date is given
        let data = condition.resource;

        try {
            if (condition.resource.onsetDateTime) {
                timestamp = new Date(condition.resource.onsetDateTime);
            } else if (condition.resource.recordedDate) {
                timestamp = new Date(condition.resource.recordedDate);
            } else if (condition.resource.abatementDateTime) {
                timestamp = new Date(condition.resource.abatementDateTime);
            }

        } catch (err) {

        }

        let disease = {
            timestamp: timestamp,
            data: data
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