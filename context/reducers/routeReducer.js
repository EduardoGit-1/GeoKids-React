const auth = (state, {type, payload}) =>{
    switch(type){
        case 'REGISTER_SUCCESS':
            //myArray: [...this.state.myArray, 'new value'] 
            let routes = state.routes.concat(payload)
            return{
                ...state,
                routes
            }
        case 'REGISTER_FAIL':
            return {
                ...state,
                error: payload
            }
        case 'GET_ROUTES_SUCCESS':
            console.log(payload)
            return {
                ...state,
                routes : payload
            }
        case 'GET_ROUTES_FAIL':
            return {
                ...state,
                error: payload
            }   
        default:
            return state
    }
}
export default auth;