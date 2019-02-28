import GLOBAL from '../component/Constants.js';

export const processFetchRequest = (url, method, input) => {
    const URL = GLOBAL.BASE_URL + url;
    return fetch(
        URL, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: input
        })
        .then((response) => response.json)
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {
            console.log(error);            
        });
    
}