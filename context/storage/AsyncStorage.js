import {AsyncStorage} from 'react-native'



export const saveUser = async (authState) =>{
    try{
        await AsyncStorage.setItem("authState", JSON.stringify(authState))
    }catch(error){
        console.log(error)
    }
}

export const loadUser = async () =>{
    try{
        let authState = await AsyncStorage.getItem("authState")
        console.log(JSON.parse(authState))
        if(authState != null){
            return JSON.parse(authState)
        }
        else {return null}

    }catch(error){
        console.log(error)
    }
}

export const removeUser = async() =>{
    try {
        AsyncStorage.removeItem("authState")
    } catch (error) {
        console.log(error)
    }
}

export const initializeRouteArray = async() =>{
    try {
        AsyncStorage.setItem('routes', JSON.stringify([]))
    } catch (error) {
        
    }
}

export const saveRoute = async(route) =>{
    try {
        AsyncStorage.getItem('routes').then(routes =>{
            const r = routes ? JSON.parse(routes) : [];
            r.push(route)
            AsyncStorage.setItem('routes', JSON.stringify(r))
        })
    } catch(error) {
        alert(error)
    }
}

export const loadRoutes = async () =>{
    try{
        let routes = await AsyncStorage.getItem("routes")

        if(routes != null){
            return JSON.parse(routes)
        }
        else {return null}

    }catch(error){
        console.log(error)
    }
}