
import GLOBAL from '../components/Constants';
import { processFetchRequest } from './Fetch.js'


export const loginUser = (phoneNumber, password) => {
    console.log(global.token);    
    processFetchRequest(GLOBAL.LOGIN_URL, 
                        'POST', 
                        JSON.stringify({'MobileNo':phoneNumber, 'password':password, 'IOSDeviceId':global.token}))
    .then((response) =>{
        // console.warn(response);        
        return response
    })
}