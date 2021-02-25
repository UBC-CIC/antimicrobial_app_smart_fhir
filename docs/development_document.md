# Development Document

This document will go over a few implementation details of this application.

## SMART on FHIR

This application utilizes the [SMART on FHIR framework](https://docs.smarthealthit.org/) which allows it to interface with SMART on FHIR compliant Electronic Medical Record (EMR) systems. We utilized the [SMART CLient JS library](http://docs.smarthealthit.org/client-js/) to help us interface and securely launch the application from EMR servers.

## Querying Patient Data

After the application is launched, we are using the SMART Client Library to query multiple different FHIR resources from the EMR server within the context of a single patient. Some of the FHIR resources we are querying include: Observation, Procedure, AllergyIntollerance, MedicationRequest, DiagnosticRequest, and ServiceRequest.  


