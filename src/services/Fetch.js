import './Global'

export const processFetchRequest = (url, method, input) => {
    const URL = global.BASE_URL + url;    
    return fetch(
        URL, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
                // 'latitude': 0.0,
                // 'longitude': 0.0
            },
            body: input
        })
        .then((response) => response.json())
        .then((responseJson) =>{            
            return responseJson            
        })
        .catch((error) => {            
            throw error;
        });
}

