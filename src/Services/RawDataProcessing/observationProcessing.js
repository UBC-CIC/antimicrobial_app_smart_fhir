const observationProcessing = (observations) => {
    let processedData = [];
    for (let observation of observations) {
        let type = "unclassified";
        let data = observation.resource;
        let timestamp;
        if (observation.resource.category) {
            if (observation.resource.category[0].coding) {
                if (observation.resource.category[0].coding[0].display === "vital-signs") {
                    type = "vitals";
                } else if (observation.resource.category[0].coding[0].display === "laboratory") {
                    type = "laboratory";
                } else if (observation.resource.category[0].coding[0].display === "social-history") {
                    type = "social";
                } else if (observation.resource.category[0].coding[0].display === "imaging") {
                    type = "imaging"
                } else if (observation.resource.category[0].coding[0].display === "procedure") {
                    type = "procedure"
                } else if (observation.resource.category[0].coding[0].display === "survey") {
                    type = "survey";
                } else if (observation.resource.category[0].coding[0].display === "exam") {
                    type = "exam";
                } else if (observation.resource.category[0].coding[0].display === "therapy") {
                    type = "therapy"
                } else if (observation.resource.category[0].coding[0].display === "activity") {
                    type = "activity"
                }
            }
        }

        try { // wrap in try/catch in case we encounter an unexpected situation
            if (observation.resource.effectiveDateTime) {
                timestamp = new Date(observation.resource.effectiveDateTime);
            } else if (observation.resource.effectivePeriod) {
                if (observation.resource.effectivePeriod.start) {
                    timestamp = new Date(observation.resource.effectivePeriod.start);
                }
            } else if (observation.resource.effectiveTiming) {
                if (observation.resource.effectiveTiming.event) {
                    timestamp = new Date(observation.resource.effectiveTiming.event);
                } else if (observation.resource.effectiveTiming.repeat) {
                    if (observation.resource.effectiveTiming.repeat.boundsPeriod) {
                        if (observation.resource.effectiveTiming.repeat.boundsPeriod.start) {
                            timestamp = new Date(observation.resource.effectiveTiming.repeat.boundsPeriod.start);
                        }
                    } else if (observation.resource.effectiveTiming.repeat.boundsRange) {
                        if (observation.resource.effectiveTiming.repeat.boundsRange.low) {
                            timestamp = observation.resource.effectiveTiming.repeat.boundsRange.low;
                        }
                    }
                }
            }

            if (!timestamp) {
                if (observation.resource.issued) {
                    timestamp = new Date(observation.resource.issued);
                } else {
                    timestamp = new Date();
                }
            }

        } catch (e) {

        }


        processedData.push({type: type, timestamp: timestamp, data: data});
    }

    try { // attempt to to sort, handle against invalid timestamp
        processedData.sort((a, b) => {
            return Date.parse(b.timestamp) - Date.parse(a.timestamp);
        });
    } catch (e) {

    }

    return processedData;
}

export default observationProcessing;