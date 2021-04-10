import {saveUser} from '../storage/AsyncStorage'

const auth = (state, {type, payload}) =>{
    switch(type){
        case 'REGISTER_SUCCESS':
            const authState = {
                ...state,
                user : payload,
                isLoggedIn : true
            }
            saveUser(authState)
            return{
                ...state,
                user : payload,
                isLoggedIn : true
            }
        case 'REGISTER_FAIL':
            return {
                ...state,
                error: payload
            }
        case 'LOGIN':
            if(payload != null){
                return {
                    ...state,
                    ...payload
                }
            }else{
                return {...state}
            }

        default:
            return state
    }
}
export default auth;