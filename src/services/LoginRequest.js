
import GLOBAL from '../component/Constants.js';


function loginUser(data) {
    return new Promise((resolve, reject) => {
        fetch(GLOBAL.LOGIN_URL)
    })
}