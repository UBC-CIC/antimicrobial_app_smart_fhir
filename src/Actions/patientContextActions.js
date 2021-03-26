import medicationIdentifier from "../Services/ComprehendMedical/medicationIdentifier";
import medicationParser from "../Services/ComprehendMedical/medicationParser";
import antibioticIdentifier from "../Services/AntibioticIdentifier/AntibioticIdentifier.js";
import antibioticIdentifierAlternate from "../Services/AntibioticIdentifier/AntibioticIdentifierAlternate";
import conditionProcessing from "../Services/RawDataProcessing/conditionProcessing";
import diagnosticReportProcessing from "../Services/RawDataProcessing/diagnosticReportProcessing";
import allergyProcessing from "../Services/RawDataProcessing/allergyProcessing";
import procedureProcessing from "../Services/RawDataProcessing/procedureProcessing";
import medicationProcessing from "../Services/RawDataProcessing/medicationProcessing";
import observationProcessing from "../Services/RawDataProcessing/observationProcessing";



//=====================================---SET PATIENT DATA---========================================

// Sets basic patient information
export const setPatientData = (payload) => {
    return {
        type: "SET_PATIENT_DATA",
        payload: payload,
    }
}

// Sets patient observation data
export const setObservationData = (payload) => {
    return {
        type: "SET_OBSERVATION_DATA",
        payload: payload,
    }
}

// Sets graph to display
export const setGraphToDisplay = (payload) => {
    return {
        type: "SET_GRAPH_DISPLAY",
        payload: payload,
    }
}

// Set graph data start date
export const setGraphDataStart = (payload) => {
    return {
        type: "SET_GRAPH_DATA_START_DATE",
        payload: payload,
    }
}

// Set graph data end date
export const setGraphDataEnd = (payload) => {
    return {
        type: "SET_GRAPH_DATA_END_DATE",
        payload: payload,
    }
}

//============================================---PROCESS MEDICATION DATA---=============================================

// Initiates setting patient medication data
export const setMedicationData = (payload) => {
    return (dispatch) => {
        dispatch(processMedicationData(payload));
    }
}

// Processes patient medication data
export const processMedicationData = (meds) => {
    return async (dispatch) => {
        let antibioticsArray = [];
        let medication = meds.medications;
        for (let medicine of medication) {
            let shouldInclude = false;
            let hasRxNormCode;
            let rxNormCodes = [];
            try {
                // check for rxNorm code
                for (let coding of medicine.resource.medicationCodeableConcept.coding) {
                    if (coding.system === "http://www.nlm.nih.gov/research/umls/rxnorm"){
                        hasRxNormCode = true;
                        rxNormCodes.push(coding.code);
                    }
                }
                if (rxNormCodes.length > 0) {
                    shouldInclude = await antibioticIdentifierAlternate(rxNormCodes);
                }
            } catch (e) {

            }
            
            let medicationIdentities = [];
            if (!hasRxNormCode) {
                // try to parse description to extract medication name
                let parsedMedication;
                try {
                    parsedMedication = await medicationParser(medicine.resource.medicationCodeableConcept.text);
                } catch (error) {
                    console.error(error);
                    // error fail safe
                    shouldInclude = true;
                }

                // if we were able to parse the medication name, we call inferRxNorm to find the closest
                // matching rxNorm concept and code
                let result;
                if (parsedMedication && !shouldInclude) {
                    for (let entity of parsedMedication.Entities) {
                        if ((entity.Category === "MEDICATION") && (entity.Score > 0.75)) {
                            result = await medicationIdentifier(entity.Text);
                            medicationIdentities.push(result);
                        } else if ((entity.Category === "MEDICATION") && (entity.Score <= 0.75)) {
                            shouldInclude = true;
                        }
                    }
                }
            }


            // check if medication is an antibiotic
            if (!shouldInclude) {
                shouldInclude = await antibioticIdentifier(medicationIdentities);
            }


            let startDate = null;
            let endDate = null;
            let description = null;
            let dosage = null;
            let status = null;
            try {
                if (medicine.resource.dosageInstruction) {
                    if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                        startDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.start);
                    }
                }
                if (medicine.resource.dosageInstruction) {
                    if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod) {
                        if (medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end) {
                            endDate = new Date(medicine.resource.dosageInstruction[0].timing.repeat.boundsPeriod.end);
                        }
                    }
                }

                if (medicine.resource.authoredOn && !startDate) {
                    startDate = new Date(medicine.resource.authoredOn);
                }

            } catch (error) {

            }


            try {
                description = medicine.resource.medicationCodeableConcept.text;
                status = medicine.resource.status;

                if (medicine.resource.dosageInstruction[0].text) {
                    dosage = medicine.resource.dosageInstruction[0].text;
                } else if (medicine.resource.dosageInstruction[0].patientInstruction) {
                    dosage = medicine.resource.dosageInstruction[0].patientInstruction;
                }

            } catch (error) {

            }


            let formattedAntibiotic = {
                description: description,
                dosage: dosage,
                startDate: startDate,
                endDate: endDate,
                status: status,
            }
            if (shouldInclude) {
                antibioticsArray.push(formattedAntibiotic);
            }
        }
        dispatch({type: "SET_MEDICATION_DATA", payload: antibioticsArray});
    }

}

//===================================================---SET CONDITION DATA---===========================================

// Initiates setting patient condition data
export const setConditionData = (payload) => {
    return (dispatch) => {
        dispatch(processConditionData(payload));
    }
}

export const processConditionData = (conditions) => {
    return (dispatch) => {
        let conditionArray = [];
        conditions.forEach(condition => {
            let description;
            let onsetDate;
            let verified;
            let status;

            try {
                description = condition.resource.code.text;
                onsetDate = condition.resource.onsetDateTime;
                if (onsetDate) {
                    onsetDate = new Date(condition.resource.onsetDateTime);
                }
                verified = condition.resource.verificationStatus.text;
                status = condition.resource.clinicalStatus.text;
            } catch (err) {

            }

            let disease = {
                description: description,
                onsetDate: onsetDate,
                verified: verified,
                status: status
            }
            conditionArray.push(disease);
        })
        try {
            conditionArray.sort((a, b) => {
                return Date.parse(b.onsetDate) - Date.parse(a.onsetDate);
            });
        } catch (e) {

        }
        dispatch({type: "SET_DISEASE_DATA", payload: conditionArray});
    }

}

//=======================================---SET PATIENT ALLERGY DATA---=================================================

// Sets patient allergy data
export const setAllergyData = (payload) => {
    return (dispatch) => {
        dispatch(processAllergyData(payload));
    }
}

// processes allergy data, filter and keep only antibiotic related allergies
export const processAllergyData = (payload) => {
    return async (dispatch) => {

        let allergyArray = [];

        let allergies = payload.allergies;


        for (let allergy of allergies) {
            let shouldInclude = false;
            let isMedication = "Unknown";
            if (allergy.resource.code) {
                let reaction;
                let date;
                let verification;
                let criticality;
                let clinicalStatus;
                let description;
                try {

                    if (allergy.resource.category) {
                        if (allergy.resource.category[0] === "medication") {
                            shouldInclude = true;
                            isMedication = true;
                        } else if (allergy.resource.category[0] !== "medication") {
                            shouldInclude = false;
                            isMedication = false;
                        }
                    }


                    if (allergy.resource.code.text) {
                        description = allergy.resource.code.text;

                        // try to parse description to extract a medication name, if any
                        if (!shouldInclude && (isMedication === "Unknown")) {
                            let parsedMedication;
                            try {
                                parsedMedication = await medicationParser(allergy.resource.code.text);
                            } catch (error) {
                                console.error(error);
                                // error fail safe
                                shouldInclude = true;
                            }

                            // if we were able to parse the medication name, we call inferRxNorm to find the closest
                            // matching rxNorm concept and code
                            if (parsedMedication && !shouldInclude) {
                                for (let entity of parsedMedication.Entities) {
                                    if (entity.Category === "MEDICATION") {
                                        shouldInclude = true;
                                    }
                                }
                            }
                        }

                    }




                    if (allergy.resource.reaction) {
                        reaction = {
                            reaction: allergy.resource.reaction[0].manifestation[0].text,
                            severity: allergy.resource.reaction[0].severity
                        }
                    }


                    if (allergy.resource.recordedDate) {
                        date = allergy.resource.recordedDate;
                    }


                    if (allergy.resource.verificationStatus) {
                        verification = allergy.resource.verificationStatus.coding[0].code;
                    }


                    if (allergy.resource.criticality) {
                        criticality = allergy.resource.criticality;
                    }


                    if (allergy.resource.clinicalStatus) {
                        clinicalStatus = allergy.resource.clinicalStatus.coding[0].code;
                    }



                } catch (err) {

                }

                let formattedAllergy = {
                    clinicalStatus: clinicalStatus,
                    description: description,
                    criticality: criticality,
                    reaction: reaction,
                    date: date,
                    verification: verification
                }

                // add allergy to array
                if (shouldInclude) {
                    allergyArray.push(formattedAllergy);
                }
            }

        }

        try {
            allergyArray.sort((a,b) => {
                return Date.parse(b.date) - Date.parse(a.date);
            });
        } catch (err) {

        }


        dispatch({type: "SET_ALLERGY_DATA", payload: allergyArray});
    }
}

//============================================---SET DIAGNOSTIC DATA---===============================================

export const setDiagnosticData = (payload) => {
    return async (dispatch) => {
        await dispatch(processDiagnosticData(payload.diagnostics, payload.client));
    }
}

export const processDiagnosticData = (diagnostics, client) => {
    return async (dispatch) => {
        let organismArray = [];
        //let imagingArray = [];

        for (let entry of diagnostics) {
            let code = "";
            if (entry.resource.category) {
                code = entry.resource.category[0].coding[0].code;
            }

            switch (code) {
                case "MB": {
                    let testResultArray = [];
                    if (entry.resource.result) {
                        if (entry.resource.result.length > 0) {
                            for (let result of entry.resource.result) {
                                try {
                                    let observation = await client.request(result.reference);
                                    if (observation.interpretation) {
                                         let testEntry = {
                                             medication: observation.code.coding[0].display,
                                             testResult: observation.interpretation[0].coding[0].code
                                         }
                                         testResultArray.push(testEntry);
                                    }
                                } catch (e) {
                                    console.log("Error fetching diagnostic observation: ", e);
                                }

                            }
                        }
                    }
                    let source = "Unknown";
                    let type = "Unknown";
                    if (entry.resource.basedOn) {
                        for (let basedEntry of entry.resource.basedOn) {
                            if (basedEntry.reference) {
                                if (basedEntry.reference.includes("ServiceRequest")) {
                                    try {
                                        let serviceRequest = await client.request(basedEntry.reference);
                                        if (serviceRequest.specimen) {
                                            if (serviceRequest.specimen.type) {
                                                type = serviceRequest.specimen.type.coding[0].display;
                                            }

                                            if (serviceRequest.specimen.bodySite) {
                                                source = serviceRequest.specimen.bodySite.coding[0].display;
                                            }
                                        } else if (serviceRequest.bodySite) {
                                            source = serviceRequest.bodySite.coding[0].display;
                                        }
                                    } catch (e) {

                                    }
                                }
                            }
                        }
                    }
                    let timestamp;
                    let organism;
                    try {
                        if (entry.resource.code) {
                            if (entry.resource.code.coding) {
                                if (entry.resource.code.coding[0].display) {
                                    organism = entry.resource.code.coding[0].display;
                                } else {
                                    organism = entry.resource.code.text;
                                }
                            }
                        }

                        if (entry.resource.effectiveDateTime) {
                            timestamp = new Date(entry.resource.effectiveDateTime);
                        } else if (entry.resource.issued) {
                            timestamp = new Date(entry.resource.issued);
                        } else if (entry.resource.meta) {
                            if (entry.resource.meta.lastUpdated) {
                                timestamp = new Date(entry.resource.meta.lastUpdated);
                            }
                        }
                    } catch (e) {

                    }
                    let organismEntry = {
                        description: organism,
                        timestamp: timestamp,
                        testResults: testResultArray,
                        source: source,
                        type: type
                    }

                    organismArray.push(organismEntry);
                    break;
                }
                default:
                    break;
            }
        }

        try {
            organismArray.sort((a, b) => {
                return Date.parse(b.timestamp) - Date.parse(a.timestamp);
            });
        } catch (e) {

        }

        dispatch({type: "SET_ORGANISM_DATA", payload: organismArray});
    }
}

//==============================================---SET PROCEDURE DATA---============================================

export const setProcedureData = (payload) => {
    return (dispatch) => {
        dispatch(processProcedureData(payload));
    }
}

export const processProcedureData = (payload) => {
    return (dispatch) => {
        let procedureArray = [];
        for (let procedure of payload) {

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
            procedureArray.push(procedureEntry);
        }

        dispatch({type: "SET_PROCEDURE_DATA", payload: procedureArray});
    }
}

//===============================================---SET RAW DATA---=================================================

export const setRawData = (payload) => {
    return (dispatch) => {
        dispatch(processRawData(payload))
    }
}

export const processRawData = (payload) => {
    return (dispatch) => {
        const { observations, allergies, medications, conditions, procedures, diagnosticReports} = payload;
        let allergyResult = allergyProcessing(allergies);
        let medicationResult = medicationProcessing(medications);
        let observationResult = observationProcessing(observations);
        let procedureResult = procedureProcessing(procedures);
        let conditionResult = conditionProcessing(conditions);
        let diagnosticReportsResult = diagnosticReportProcessing(diagnosticReports);
        let rawDataPayload = {
            allergies: allergyResult,
            medications: medicationResult,
            observations: observationResult,
            conditions: conditionResult,
            procedures: procedureResult,
            diagnosticReports: diagnosticReportsResult
        }
        dispatch({type: "SET_RAW_DATA", payload: rawDataPayload});
    }
}