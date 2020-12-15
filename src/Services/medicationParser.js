import awsmobile from '../aws-exports';
const aws = require('aws-sdk');


const medicationParser = async (payload) => {
    return new Promise(function(resolve, reject) {
        let params = {
            Text: payload,
        }
        aws.config.region = "ca-central-1";



        aws.config.credentials = new aws.CognitoIdentityCredentials({
            IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
            RoleArn: process.env.REACT_APP_RoleArn,
        });


        let comprehendMedical = new aws.ComprehendMedical();

        comprehendMedical.detectEntitiesV2(params, function(err, data) {
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


export default medicationParser;