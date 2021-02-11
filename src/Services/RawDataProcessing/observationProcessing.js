const observationProcessing = (observations) => {
    let processedData = [];
    for (let observation of observations) {
        let code;
        let performer;
        let value;
        let component;
        let interpretation;
        let date;
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

        if (observation.resource.code) {
            if (observation.resource.code.text) {
                code = observation.resource.code.text;
            } else if (observation.resource.code.coding) {
                if (observation.resource.code.coding[0]) {
                    if (observation.resource.code.coding[0].display) {
                        code = observation.resource.code.coding[0].display;
                    }
                }
            } else {
                code = observation.resource.code;
            }
        }

        if (observation.resource.performer) {
            performer = observation.resource.performer;
        }

        if (observation.resource.component) {
            component = observation.resource.component;
        }

        if (observation.resource.interpretation) {

            if (observation.resource.interpretation[0].text) {
                interpretation = observation.resource.interpretation[0].text;
            }

            if (!interpretation && observation.resource.interpretation[0].coding) {
                if (observation.resource.interpretation[0].coding[0].display) {
                    interpretation = observation.resource.interpretation[0].coding[0].display;
                } else {
                    interpretation = observation.resource.interpretation[0];
                }
            }

            if (!interpretation || observation.resource.interpretation.length > 1) {
                interpretation = observation.resource.interpretation;
            }

        }


        if (observation.resource.valueQuantity) {
            value = observation.resource.valueQuantity;
        } else if (observation.resource.valueCodeableConcept) {
            value = observation.resource.valueCodeableConcept;
        } else if (observation.resource.valueString) {
            value = observation.resource.valueString;
        } else if (observation.resource.valueBoolean) {
            value = observation.resource.valueBoolean;
        } else if (observation.resource.valueInteger) {
            value = observation.resource.valueInteger;
        } else if (observation.resource.valueRange) {
            value = observation.resource.valueRange;
        } else if (observation.resource.valueRatio) {
            value = observation.resource.valueRatio;
        } else if (observation.resource.valueSampledData) {
            value = observation.resource.valueSampledData;
        } else if (observation.resource.valueTime) {
            value = observation.resource.valueTime;
        } else if (observation.resource.valueDateTime) {
            value = observation.resource.valueDateTime;
        } else if (observation.resource.valuePeriod) {
            value = observation.resource.valuePeriod;
        }

        try { // wrap in try/catch in case we encounter an unexpected situation
            if (observation.resource.effectiveDateTime) {
                date = observation.resource.effectiveDateTime;
                timestamp = new Date(observation.resource.effectiveDateTime);
            } else if (observation.resource.effectivePeriod) {
                date = observation.resource.effectivePeriod;
                if (observation.resource.effectivePeriod.start) {
                    timestamp = new Date(observation.resource.effectivePeriod.start);
                }
            } else if (observation.resource.effectiveTiming) {
                date = observation.resource.effectiveTiming;
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
            } else if (observation.resource.effectiveInstant) {
                date = observation.resource.effectiveInstant;
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


        processedData.push(
            {
                type: type,
                timestamp: timestamp,
                data: data,
                code: code,
                performer: performer,
                value: value,
                component: component,
                interpretation: interpretation,
                date: date,
            }
            );
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