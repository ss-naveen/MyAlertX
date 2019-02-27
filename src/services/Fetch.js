import GLOBAL from '../component/Constants.js';

export const processFetchRequest = (url, method, input) => {
    const URL = GLOBAL.BASE_URL + url;
    
}


export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
            .then((res) => res.json());
}
