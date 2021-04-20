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
        else {return []}

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

export const loadFavourites = async() =>{
    try{
        let favourites = await AsyncStorage.getItem("favorites")

        if(favourites != null){
            return JSON.parse(favourites)
        }
        else {return []}

    }catch(error){
        console.log(error)
    }
}

export const getFavoritePlace = async(placeID) => {
    try {

        let favorites = await AsyncStorage.getItem('favorites')
        if(favorites != null){
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

export const saveImageUpload = async(destination, image) =>{
    try {
        AsyncStorage.getItem('uploads').then(uploads =>{
            const u = uploads ? JSON.parse(uploads) : [];
            let uploadIndex = u.findIndex(upload => upload.destination.placeID === destination.placeID)
            if(uploadIndex != -1){
                u[uploadIndex].images.push(image);
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }else{
                let upload = {destination, images: [image], videos: [], audios: [], texts:[]}
                u.push(upload)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }
        })
    } catch(error) {
        alert(error)
    }
}

export const saveVideoUpload = async(destination, video) =>{
    try {
        AsyncStorage.getItem('uploads').then(uploads =>{
            const u = uploads ? JSON.parse(uploads) : [];
            let uploadIndex = u.findIndex(upload => upload.destination.placeID === destination.placeID)
            if(uploadIndex != -1){
                u[uploadIndex].videos.push(video)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }else{
                let upload = {destination, images: [], videos: [video], audios: [], texts: []}
                u.push(upload)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }
        })
    } catch(error) {
        alert(error)
    }
}

export const saveAudioUpload = async(destination, audio) =>{
    try {
        AsyncStorage.getItem('uploads').then(uploads =>{
            const u = uploads ? JSON.parse(uploads) : [];
            let uploadIndex = u.findIndex(upload => upload.destination.placeID === destination.placeID)
            if(uploadIndex != -1){
                u[uploadIndex].audios.push(audio)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }else{
                let upload = {destination, images: [], videos: [], audios : [audio], texts: []}
                u.push(upload)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }
        })
    } catch(error) {
        alert(error)
    }
}
export const saveTextUpload = async(destination, text) =>{
    try {
        AsyncStorage.getItem('uploads').then(uploads =>{
            const u = uploads ? JSON.parse(uploads) : [];
            let uploadIndex = u.findIndex(upload => upload.destination.placeID === destination.placeID)
            if(uploadIndex != -1){
                u[uploadIndex].texts.push(text)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }else{
                let upload = {destination, images: [], videos: [], audios : [], texts : [text]}
                u.push(upload)
                AsyncStorage.setItem('uploads', JSON.stringify(u))
            }
        })
    } catch(error) {
        alert(error)
    }
}


export const getUploads = async(placeID) => {
    try {
        let uploads = await AsyncStorage.getItem('uploads')
        if(uploads != null){
            uploads = JSON.parse(uploads)
            let f = uploads.find(upload => upload.destination.placeID === placeID)
            if(f != null){
                return f
            }
        }
        return {images: [], videos : [], audios : [], texts: []}
    } catch (error) {
        console.log(error)
    }
}

export const removeUploads = async() =>{
    try {
        AsyncStorage.removeItem("uploads")
    } catch (error) {
        console.log(error)
    }
}
export const removeRoutes = async() =>{
    try {
        AsyncStorage.removeItem("routes")
    } catch (error) {
        console.log(error)
    }
}

export const removeEverything = async () =>{
    try {
        AsyncStorage.removeItem("favorites")
        AsyncStorage.removeItem("routes")
    } catch (error) {
        
    }
}