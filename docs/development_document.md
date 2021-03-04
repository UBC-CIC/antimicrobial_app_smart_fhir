# Development Document

This document will go over a few implementation details of this application.

## Interfacing with SMART on FHIR compliant EMR servers

This application utilizes the [SMART on FHIR framework](https://docs.smarthealthit.org/) which allows it to interface with SMART on FHIR compliant Electronic Medical Record (EMR) systems. We utilized the [SMART Client JS library](http://docs.smarthealthit.org/client-js/) to help us interface and securely launch the application from EMR servers.

- Using the SMART JS Client library, the solution requests authorization from the EMR server. The solution needs to be registered with the EMR server prior to use, and the unique Client ID must be specified in the src/index.js file for successful authorization. 
 - The following scope permissions (specified in the src/index.js file) are required for the successful launch of the solution:  patient/Observation.read, patient/Procedure.read, patient/Patient.read, patient/AllergyIntolerance.read, patient/MedicationRequest.read, patient/DiagnosticReport.read, patient/ServiceRequest.read, launch, profile, openid, online_access
- After successful authorization with the EMR, a FHIR client instance is initialized within the context of the current patient. The solution then launches and starts loading.
- The FHIR client is then used to query patient information from the following FHIR Resources on the EMR server: 

|Resource| Information Obtained|
|:----------------|:-----------|
|  Patient        |     patient personal details (name, age, address, etc.)    | 
|  Observation        |   lab data, vitals, imaging, social history, clinical assessment      |
|  Procedure        |  operations, counselling    |
|  AllergyIntolerance        | allergies, intolerances    |
|  MedicationRequest        |  prescriptions   |
|  DiagnosticReport        |   laboratory, pathology, and imaging reports        |
|  ServiceRequest        |     record of a procedure or diagnostic request     |
 


