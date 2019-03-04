import './Global'

export const processFetchRequest = (url, method, input) => {
    const URL = global.BASE_URL + url;
    // console.warn(URL, method, input);
    
    return fetch(
        URL, {
            method: method,
            headers: {
                // 'Accept': 'application/json',
                'Content-type': 'application/json'
                // 'latitude': 0.0,
                // 'longitude': 0.0
            },
            body: input
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            console.log(responseJson);            
            return responseJson            
        })
        .catch((error) => {
            console.error(error);            
            throw error;
        });
}


export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
            .then((res) => res.json());
}
