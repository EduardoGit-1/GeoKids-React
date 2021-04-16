const favoritesReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_FAVORITES_SUCCESS':
            return{
                ...state,
                favourites : payload
            }
        case 'REGISTER_PLACE_SUCCESS':
            let favourites = state.favourites;
            let placeIndex = favourites.findIndex(place => place.id === payload.id)
            if(placeIndex != -1){
                favourites[placeIndex] = payload
            }else{
                favourites.push(payload)
            }
            return{
                ...state,
                favourites: favourites,
                loading: false
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: payload
            }

        default:
            return state
    }
}
export default favoritesReducer;