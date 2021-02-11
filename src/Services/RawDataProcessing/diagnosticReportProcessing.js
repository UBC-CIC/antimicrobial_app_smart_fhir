

const diagnosticReportProcessing = (diagnostics) => {
    let processedData = [];
    for (let diagnostic of diagnostics) {
        let timestamp = new Date();
        let data = diagnostic.resource;
        
        try {
            if (diagnostic.resource.effectiveDateTime) {
                timestamp = new Date(diagnostic.resource.effectiveDateTime);
            } else if (diagnostic.resource.effectivePeriod) {
                if (diagnostic.resource.effectivePeriod.start) {
                    timestamp = new Date(diagnostic.resource.effectivePeriod.start);
                }
            } else if(diagnostic.resource.issued) {
                timestamp = new Date(diagnostic.resource.issued);
            }
        } catch (e) {
            
        }
        
        let entry = {
            timestamp: timestamp,
            data: data
        }
        processedData.push(entry);
    }

    try { // attempt to to sort, handle against invalid timestamp
        processedData.sort((a, b) => {
            return Date.parse(b.timestamp) - Date.parse(a.timestamp);
        });
    } catch (e) {

    }

    return processedData;
}

export default  diagnosticReportProcessing;