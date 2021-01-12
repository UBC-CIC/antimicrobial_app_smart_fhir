# Antimicrobial SMART on FHIR Application
Microbial Insights is a prototype SMART on FHIR clinical decision support application that aims to display relevant patient electronic health record (EHR) information to clincial professionals when dealing with infection cases.  

## Stack

* **Front-end** - ReactJS on NodeJS as the core framework. Utilizes the SMART on FHIR framework (FHIR version R4) for EHR launches.
* **Hosting** - AWS Amplify.
* **Backend** - In the backend, we are using AWS Comprehend Medical to aid in patient data classification and filtering. 

## High level architecture

TBD

# Deployment
To deploy this solution into your AWS Account please follow our [Deployment Guide](./docs/deployment_guide.md)


# Changelog
* January 30, 2021: Initial release.

# License
This project is distributed under  [Apache-2.0](https://github.com/UBC-CIC/antimicrobial_app_smart_fhir/blob/main/LICENSE) 
