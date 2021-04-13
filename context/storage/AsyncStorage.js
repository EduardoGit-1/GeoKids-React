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

export const saveClassification = async(place) =>{
    try {
        AsyncStorage.getItem('favorites').then(favorites =>{
            const f = favorites ? JSON.parse(favorites) : [];
            let favoriteIndex = f.findIndex(favorite => favorite.destination.placeID === place.destination.placeID)
            if(favoriteIndex != -1){
                f[favoriteIndex] = place
                AsyncStorage.setItem('favorites', JSON.stringify(f))
            }else{
                f.push(place)
                AsyncStorage.setItem('favorites', JSON.stringify(f))
            }
        })
    } catch(error) {
        alert(error)
    }
}

export const getFavoritePlace = async(placeID) => {
    try {
        console.log(placeID)
        let favorites = await AsyncStorage.getItem('favorites')
        if(favorites != null){
            console.log(favorites)
            favorites = JSON.parse(favorites)
            let f = favorites.find(favorite => favorite.destination.placeID === placeID)
            return f
        }else{return null}
    } catch (error) {
        console.log(error)
    }
}

export const removeFavorites = async() =>{
    try {
        AsyncStorage.removeItem("favorites")
    } catch (error) {
        console.log(error)
    }
}