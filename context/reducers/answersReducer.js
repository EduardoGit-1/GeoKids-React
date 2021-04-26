const answersReducer = (state, {type, payload}) =>{
    switch(type){
        case 'UPDATE_STATE':
            return{
                ...state,
                ...payload
            }
        case 'GET_ANSWERS':
            return {
                ...payload
            }
        default:
            return state
    }
}
export default answersReducer;