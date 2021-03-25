const auth = (state, {type, payload}) =>{
    switch(type){
        case 'REGISTER_SUCCESS':
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
            return state
        default:
            return state
    }
}
export default auth;