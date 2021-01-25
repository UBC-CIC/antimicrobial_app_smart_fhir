

const procedureProcessing = (procedures) => {
    let processedData = [];
    for (let procedure of procedures) {
        let description;
        let startDate;
        let endDate;
        let status = "N/A";

        try {

            let resource = procedure.resource;
            if (resource.code) {
                if (resource.code.coding) {
                    description = resource.code.coding[0].display;
                }
            }
            if (resource.performedPeriod) {
                if (resource.performedPeriod) {
                    startDate = new Date(resource.performedPeriod.start);
                    endDate = new Date(resource.performedPeriod.end);
                }
            } else if (resource.performedDateTime) {
                startDate = new Date(resource.performedDateTime);
                endDate = new Date(resource.performedDateTime);
            }

            if (resource.status) {
                status = resource.status;
            }

        } catch (e) {

        }

        let procedureEntry = {
            description: description,
            startDate: startDate,
            endDate: endDate,
            status: status
        }
        processedData.push(procedureEntry);
    }

    return processedData;
}

export default procedureProcessing;