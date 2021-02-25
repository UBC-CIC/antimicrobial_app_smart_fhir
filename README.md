# Antimicrobial Insights SMART on FHIR Application
Antimicrobial Insights is a prototype SMART on FHIR clinical decision support application that aims to display relevant patient electronic health record (EHR) information to clincial professionals when dealing with infection cases. We hope that this serves as a demonstration of what's possible when third party applications are integrated with Smart on FHIR compatible Electronic Medical Record systems. Specialized views of patient data helps healthcare providers focus on the information that matters.

|Index| Description|
|:----------------|:-----------|
| [Stack](#stack)         |     The application stack.    | 
| [Demo](#demo)         |     Interact with Antimicrobial Insights application.    | 
| [Overview](#overview)         |     See the motivation behind this project.    | 
| [Deployment](#deployment)         |    Learn how to deploy this project yourself. |
| [Authors](#authors)      |     Meet the team behind this.     |
| [License](#license)      |     License details.     |


## Stack

* **Front-end** - ReactJS on NodeJS as the core framework. Utilizes the SMART on FHIR framework (FHIR version R4) for EHR launches.
* **Hosting** - AWS Amplify.
* **Backend** - In the backend, we are using AWS Comprehend Medical to aid in patient data classification and filtering. 

# Demo
Try launching the application yourself using the [online dashboard](). You will need to launch the application from a SMART on FHIR compliant EMR emulator. There are a number of of different ones available but we recommend using the [Smart App Launcher Sandbox](https://launch.smarthealthit.org/) as it does not require any code modifications to run. 

You can use the following settings shown below to launch the demo:

<img src="./docs/images/smartSandbox.png"  width="500"/>


## High level architecture

<img src="./docs/images/architecture_diagram.png"  width="500"/>

# Deployment
To deploy this solution into your AWS Account please follow our [Deployment Guide](./docs/deployment_guide.md)


# Changelog
* March 1, 2021: Initial release.

# License
This project is distributed under  [Apache-2.0](https://github.com/UBC-CIC/antimicrobial_app_smart_fhir/blob/main/LICENSE) 
