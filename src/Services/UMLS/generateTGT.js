import querystring from 'querystring';
import he from 'he';
import parser from 'fast-xml-parser';
const axios = require('axios');


/** Adapted from Bell Eapen:
 *  https://github.com/dermatologist/umlsjs/blob/develop/src/service/authService.ts */
const generateTGT = async () => {
    return new Promise(function(resolve, reject) {
        const config = {
            baseURL: "https://utslogin.nlm.nih.gov/cas/v1/",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const requestBody = {
            apikey: process.env.REACT_APP_UMLS_API_KEY
        }
        const apiFunction = 'api-key'
        const options = {
            attributeNamePrefix : "U_",
            attrNodeName: "attr",
            textNodeName : "#text",
            ignoreAttributes : false,
            ignoreNameSpace : false,
            allowBooleanAttributes : false,
            parseNodeValue : true,
            parseAttributeValue : true,
            trimValues: true,
            cdataTagName: "__cdata",
            cdataPositionChar: "\\c",
            localeRange: "",
            parseTrueNumberOnly: false,
            arrayMode: false, //"strict"
            attrValueProcessor: (val) => he.decode(val, {isAttributeValue: true}),
            tagValueProcessor : (val) => he.decode(val),
            stopNodes: ["parse-me-as-string"]
        };
        axios.post(apiFunction, querystring.stringify(requestBody), config).then(response => {
            const jsonObj = parser.parse(response.data, options)
            const urlWithTgt = jsonObj.html.body.form.attr.U_action
            const url = config.baseURL+apiFunction+'/'
            const tgt = urlWithTgt.replace(url, '');
            resolve(tgt);
        }).catch(err => {
            reject(err);
        });
    })
}


export default generateTGT;