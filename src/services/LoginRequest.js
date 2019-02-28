
import GLOBAL from '../component/Constants.js';
import { processFetchRequest } from './Fetch.js'


function loginUser(phoneNumber, password) {
    
    processFetchRequest(GLOBAL.LOGIN_URL,'POST')
}