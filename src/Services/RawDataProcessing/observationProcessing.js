const observationProcessing = (observations) => {
    let processedData = [];
    for (let observation of observations) {
        let code;
        let performer;
        let value;
        let component;
        let interpretation;
        let type = "unclassified";
        let timestamp;
        if (observation.resource.category) {
            if (observation.resource.category[0].coding) {
                if ((observation.resource.category[0].coding[0].display.toLowerCase() === "vital-signs") ||
                    (observation.resource.category[0].coding[0].display.toLowerCase() === "vital signs")) {
                    type = "vitals";
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "laboratory") {
                    type = "laboratory";
                } else if ((observation.resource.category[0].coding[0].display.toLowerCase() === "social-history") ||
                    (observation.resource.category[0].coding[0].display.toLowerCase() === "social history")) {
                    type = "social";
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "imaging") {
                    type = "imaging"
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "procedure") {
                    type = "procedure"
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "survey") {
                    type = "survey";
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "exam") {
                    type = "exam";
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "therapy") {
                    type = "therapy"
                } else if (observation.resource.category[0].coding[0].display.toLowerCase() === "activity") {
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
            }
        }

        if (observation.resource.performer) {
            performer = observation.resource.performer;
        }

        if (observation.resource.component) {
            component = "";
            for (let entry of observation.resource.component) {
                let entryText = "";
                if (entry.code) {
                    if (entry.code.text) {
                        entryText += entry.code.text + ": ";
                    }
                }

                if (entryText === "") {
                    if (entry.code) {
                        if (entry.code.coding) {
                            if (entry.code.coding[0].display) {
                                entryText += entry.code.coding[0].display + ": ";
                            }
                        }
                    }
                }
                // Value Portion
                if (entry.valueQuantity) {
                    entryText += entry.valueQuantity.value + " " + entry.valueQuantity.unit;
                } else if (entry.valueCodeableConcept) {
                    if (entry.valueCodeableConcept.text) {
                        entryText += entry.valueCodeableConcept.text;
                    } else if (entry.valueCodeableConcept.coding) {
                        for (let code of entry.valueCodeableConcept.coding) {
                            if (code.display) {
                                entryText += code.display;
                            }
                        }
                    }
                } else if (entry.valueString) {
                    entryText += entry.valueString;
                } else if (entry.valueBoolean) {
                    entryText += entry.valueBoolean;
                } else if (entry.valueInteger) {
                    entryText += entry.valueInteger;
                } else if (entry.valueRange) {
                    entryText += "low: " + entry.valueRange.low + " high: " + entry.valueRange.high;
                } else if (entry.valueRatio) {
                    entryText += entry.valueRatio.numerator + " / " + entry.valueRatio.denominator;
                } else if (entry.valueSampledData) {
                    let valueEntry = "";
                    if (entry.valueSampledData.data) {
                       valueEntry += "Data: " + entry.valueSampledData.data;
                    }
                    if (entry.valueSampledData.lowerLimit) {
                        valueEntry += " Lower Limit: " + entry.valueSampledData.lowerLimit;
                    }
                    if (entry.valueSampledData.upperLimit) {
                        valueEntry += " Upper Limit: " + entry.valueSampledData.upperLimit;
                    }
                    if (valueEntry === "") {
                        valueEntry = "N/A";
                    }
                    entryText += valueEntry;
                } else if (entry.valueTime) {
                    entryText += entry.valueTime;
                } else if (entry.valueDateTime) {
                    entryText += new Date(entry.valueDateTime).toLocaleString();
                } else if (entry.valuePeriod) {
                    entryText += "start: " + entry.valuePeriod.start + " end: " + entry.valuePeriod.end;
                }


                component += entryText + " ";
            }
        }

        if (observation.resource.interpretation) {
            if (observation.resource.interpretation[0].text) {
                interpretation = observation.resource.interpretation[0].text;
            }

            if (!interpretation && observation.resource.interpretation[0].coding) {
                if (observation.resource.interpretation[0].coding[0].display) {
                    interpretation = observation.resource.interpretation[0].coding[0].display;
                } else if (observation.resource.interpretation[0].coding[0].code) {
                    interpretation = observation.resource.interpretation[0].coding[0].code;
                }
            }
        }


        if (observation.resource.valueQuantity) {
            value = observation.resource.valueQuantity.value + " " + observation.resource.valueQuantity.unit;
        } else if (observation.resource.valueCodeableConcept) {
            if (observation.resource.valueCodeableConcept.text) {
                value = observation.resource.valueCodeableConcept.text;
            } else if (observation.resource.valueCodeableConcept.coding) {
                for (let code of observation.resource.valueCodeableConcept.coding) {
                    if (code.display) {
                        value = code.display;
                    }
                }
            }
        } else if (observation.resource.valueString) {
            value = observation.resource.valueString;
        } else if (observation.resource.valueBoolean) {
            value = observation.resource.valueBoolean;
        } else if (observation.resource.valueInteger) {
            value = observation.resource.valueInteger;
        } else if (observation.resource.valueRange) {
            value = "low: " + observation.resource.valueRange.low + " high: " + observation.resource.valueRange.high;
        } else if (observation.resource.valueRatio) {
            value = observation.resource.valueRatio.numerator + " / " + observation.resource.valueRatio.denominator;
        } else if (observation.resource.valueSampledData) {
            value = "";
            if (observation.resource.valueSampledData.data) {
                value += "Data: " + observation.resource.valueSampledData.data;
            }
            if (observation.resource.valueSampledData.lowerLimit) {
                value += " Lower Limit: " + observation.resource.valueSampledData.lowerLimit;
            }
            if (observation.resource.valueSampledData.upperLimit) {
                value += " Upper Limit: " + observation.resource.valueSampledData.upperLimit;
            }
            if (value === "") {
                value = "N/A";
            }
        } else if (observation.resource.valueTime) {
            value = observation.resource.valueTime;
        } else if (observation.resource.valueDateTime) {
            value = new Date(observation.resource.valueDateTime).toLocaleString();
        } else if (observation.resource.valuePeriod) {
            value = "start: " + observation.resource.valuePeriod.start + " end: " + observation.resource.valuePeriod.end;
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
                } else if (observation.resource.meta) {
                    timestamp = new Date(observation.resource.meta.lastUpdated);
                } else {
                    console.log("hit new time block: ", observation.resource);
                    timestamp = new Date();
                }
            }

        } catch (e) {

        }


        processedData.push(
            {
                type: type,
                timestamp: timestamp,
                code: code,
                performer: performer,
                value: value,
                component: component,
                interpretation: interpretation,
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