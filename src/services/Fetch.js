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
}


export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
            .then((res) => res.json());
}
