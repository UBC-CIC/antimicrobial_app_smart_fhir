const axios = require('axios');


/** Adapted from Bell Eapen:
 *  https://github.com/dermatologist/umlsjs/blob/develop/src/service/authService.ts */
const generateUMLSToken = async (tgtKey) => {
    return new Promise(function(resolve, reject) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let authURL = `https://utslogin.nlm.nih.gov/cas/v1/tickets/${tgtKey}`;
        let param = 'service=http%3A%2F%2Fumlsks.nlm.nih.gov';
        axios.post(authURL, param, config).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        });
    })
}


export default generateUMLSToken;

