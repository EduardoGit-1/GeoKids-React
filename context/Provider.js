import React, {createContext, useReducer} from 'react'
import authInitialState from './initialStates/authInitialState';
import authReducer from './reducers/authReducer'
import {initialRouteState} from './initialStates/trackingState'
import routeReducer from './reducers/routeReducer'
import favoritesReducer from './reducers/favoritesReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) =>{
    const [authState, authDispatch] = useReducer(authReducer, authInitialState)
    const [routeState, routeDispatch] = useReducer(routeReducer, initialRouteState)
    const [favouritesState, favouritesDispatch] = useReducer(favoritesReducer, {favourites:[], loading: false})

    return (
        <GlobalContext.Provider value = {{authState, authDispatch, routeState, routeDispatch, favouritesState, favouritesDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider