import {Auth} from "aws-amplify";
import awsmobile from '../../aws-exports';
const aws = require('aws-sdk');


const medicationIdentifier = async (payload) => {
    const credentials = await Auth.currentCredentials();
    return new Promise(function(resolve, reject) {
        let params = {
            Text: payload,
        }
        aws.config.region = process.env.REACT_APP_AWS_REGION;

        aws.config.credentials = new aws.Credentials({
            accessKeyId: credentials.accessKeyId,
            secretAccessKey: credentials.secretAccessKey,
            sessionToken: credentials.sessionToken
        });

        // Unauthorized authentication (for application use without a login)
        /*aws.config.credentials = new aws.CognitoIdentityCredentials({
            IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
            RoleArn: process.env.REACT_APP_RoleArn,
        });*/

        let comprehendMedical = new aws.ComprehendMedical();

        comprehendMedical.inferRxNorm(params, function(err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
                reject(err.stack);
            } else {
                //console.log(data);
                resolve(data); // successful response
            }
        });
    });
}


export default medicationIdentifier;