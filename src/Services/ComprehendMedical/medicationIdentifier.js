import awsmobile from '../../aws-exports';
import {Auth} from "aws-amplify";
const aws = require('aws-sdk');


const medicationIdentifier = async (payload) => {
    return new Promise(function(resolve, reject) {
        let params = {
            Text: payload,
        }
        aws.config.region = "ca-central-1";

        /*const credentials = await Auth.currentCredentials();
        console.log("current Credentials", credentials);
        aws.config.credentials = new aws.Credentials({
            accessKeyId: credentials.accessKeyId,
            secretAccessKey: credentials.secretAccessKey,
            sessionToken: credentials.sessionToken
        });*/

        aws.config.credentials = new aws.CognitoIdentityCredentials({
            IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
            RoleArn: process.env.REACT_APP_RoleArn,
        });

        /*aws.config.credentials.get(function(){
            // Credentials will be available when this function is called.
            var accessKeyId = aws.config.credentials.accessKeyId;
            var secretAccessKey = aws.config.credentials.secretAccessKey;
            var sessionToken = aws.config.credentials.sessionToken;

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