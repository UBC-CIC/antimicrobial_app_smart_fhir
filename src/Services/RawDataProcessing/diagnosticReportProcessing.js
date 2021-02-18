

const diagnosticReportProcessing = (diagnostics) => {
    let processedData = [];
    for (let diagnostic of diagnostics) {
        let timestamp;
        let details;
        let system;
        let result = "";
        
        try {

            if (diagnostic.resource.code) {
                if (diagnostic.resource.code.text) {
                    details = diagnostic.resource.code.text;
                }
                if (!details) {
                    if (diagnostic.resource.code.coding) {
                        if (diagnostic.resource.code.coding[0].display) {
                            details = diagnostic.resource.code.coding[0].display;
                        } else if (diagnostic.resource.code.coding[0].code) {
                            details = diagnostic.resource.code.coding[0].code;
                        }
                    }
                }

                if (diagnostic.resource.code.coding) {
                   system = diagnostic.resource.code.coding[0].system
                }
            }


            if (diagnostic.resource.effectiveDateTime) {
                timestamp = new Date(diagnostic.resource.effectiveDateTime);
            } else if (diagnostic.resource.effectivePeriod) {
                if (diagnostic.resource.effectivePeriod.start) {
                    timestamp = new Date(diagnostic.resource.effectivePeriod.start);
                }
            } else if(diagnostic.resource.issued) {
                timestamp = new Date(diagnostic.resource.issued);
            } else if (diagnostic.resource.meta) {
                if (diagnostic.resource.lastUpdated) {
                    timestamp = new Date(diagnostic.resource.lastUpdated);
                }
            } else {
                timestamp = new Date();
            }


            if (diagnostic.resource.result) {
                let numEntries = diagnostic.resource.result.length - 1;
                let count = 0;
                for (let entry of diagnostic.resource.result) {
                    if (entry.display) {
                        if (count === numEntries) {
                            result += entry.display
                        } else {
                            result += entry.display + ", "
                        }
                    }
                    count++;
                }
            }

            if (result === "") {
                result = "Not Available";
            }

        } catch (e) {
            
        }
        
        let entry = {
            timestamp: timestamp,
            details: details,
            result: result,
            system: system
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