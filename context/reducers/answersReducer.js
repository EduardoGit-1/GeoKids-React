const answersReducer = (state, {type, payload}) =>{
    switch(type){
        case 'UPDATE_STATE':
            return{
                ...state,
                ...payload
            }
        default:
            return state
    }
}
export default answersReducer;