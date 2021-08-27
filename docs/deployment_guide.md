# Deployment Guide

## Requirements
Before you deploy, you must have the following in place:
*  [AWS Account](https://aws.amazon.com/account/) 
*  [GitHub Account](https://github.com/) 
*  [Node 10 or greater](https://nodejs.org/en/download/) 
*  [Amplify CLI 4.13.1 or greater installed and configured](https://aws-amplify.github.io/docs/cli-toolchain/quickstart#quickstart) 
  


## Step 1: Front-end Deployment
In this step we will use the Amplify console to deploy and build the front-end application automatically. 

[![One-click deployment](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/UBC-CIC/antimicrobial_app_smart_fhir)

1. Fork this repository.
2. **1-click deployment** button above. Make sure to start the deployment before continuing. 
3. Go to the [Amplify Console](https://console.aws.amazon.com/amplify/home).
4. Select the **smartonfhir** app.
5. Wait until **Provision, Build, Deploy and Verify** are all green. 
6. In the left-hand menu under *App Settings*, click on **Environment Variables** then **Manage variables**.
7. Please add the following environment variables:
   ```javascript
   Variable: REACT_APP_AWS_REGION           Value: ca-central-1
   Variable: REACT_APP_HealthLake_Endpoint  Value: <Your HealthLake Endpoint URL>
   Variable: FAST_REFRESH                   Value: false
   ```
8. Click **Save**.

---

## Step 2: Providing Cognito Permissions to Access Amazon HealthLake
In this step, we need to provide our Cognito Authentication service with permissions to access Amazon HealthLake.

1. In the AWS Console, navigate to the IAM page. Then click on **Roles** from the left-hand menu.
2. Locate the "authRole" associated with the frontend application from the list and click on it. It should be named similar to the following: amplify-smartonfhir-dev-<some number>-authRole.
3. Click on the **Attach policies** button.
4. Search for *AmazonHealthLakeFullAccess*, select it, then click **Attach policy**.
