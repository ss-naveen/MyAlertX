
import { processFetchRequest } from './Fetch.js'
import '../components/Constants'


export const loginUser = (phoneNumber, password) => {    
    
    return processFetchRequest(global.LOGIN_URL, 
                        'POST', 
                        JSON.stringify({'MobileNo':phoneNumber, 'password':password, 'IOSDeviceId':global.token}))
    .then((response) =>{              
        return response
    })
    .catch((error) =>{
                
    });
}