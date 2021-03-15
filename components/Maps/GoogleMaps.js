// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
// import { StyleSheet, Text, Image, View, Alert} from 'react-native';
// import MapView from 'react-native-maps';


// const CONTAINER_HEIGHT = 480
// const SCREEN_WIDTH = 300
// const ASPECT_RATIO = CONTAINER_HEIGHT / SCREEN_WIDTH
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
// const GOOGLE_KEY = 'AIzaSyCM7K4DnUmRJVGMwVWs9yxSQgGydHAtWVg'
// const GoogleMaps = () =>{
//     const [initialRegion, setRegion] = useState(null)
//     useEffect(() =>{
//         const findCoordinates = () =>{
//             navigator.geolocation.getCurrentPosition(
//                 position => {
//                     var lat = parseFloat(position.coords.latitude)
//                     var long = parseFloat(position.coords.longitude)
//                     var region = {
//                         latitude: lat,
//                         longitude: long,
//                         latitudeDelta: LATITUDE_DELTA,
//                         longitudeDelta: LONGITUDE_DELTA,
//                         }
//                     setRegion(region);
//                 },
//                 error => Alert.alert(error.message),
//                 { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//             );
//         };
//         return findCoordinates()       
//     })
//     if(initialRegion === null){
//         return <Text>Loading</Text>
//     }else{
//         return(
//             <MapView style = {styles.map} provider = {MapView.PROVIDER_GOOGLE}
//                 initialRegion={initialRegion}>
//             </MapView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex :1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent : 'center'
//     },
//     map:{
//         ...StyleSheet.absoluteFillObject
//     }
// })

// export default GoogleMaps

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import DestinationSearch from './DestinationSearch'


const CONTAINER_HEIGHT = 480
const CONTAINER_WIDTH = 300
const ASPECT_RATIO = CONTAINER_HEIGHT / CONTAINER_WIDTH
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const API_KEY = 'AIzaSyCM7K4DnUmRJVGMwVWs9yxSQgGydHAtWVg'
const GoogleMaps = ({setDestination, region, setRegion, destination}) =>{
    const [initialRegion, setInitialRegion] = useState(null)
    const onMapPress = (e) =>{
        if(destination === null){
            setDestination({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            })
        }else{
            setDestination(null)
        }
    }

    const onRegionChangeComplete = () =>{
        setRegion(null)
    }
    useEffect(() =>{
        const findCoordinates = () =>{
            navigator.geolocation.getCurrentPosition(
                position => {
                    var lat = parseFloat(position.coords.latitude)
                    var long = parseFloat(position.coords.longitude)
                    setInitialRegion({
                        latitude: lat,
                        longitude: long,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    });
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        };
        findCoordinates()       
    })

    if(initialRegion === null){
        return <Text>Loading</Text>
    }else{
        return(
            <MapView style = {styles.map} 
                provider = {MapView.PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                region = {region}
                
                onRegionChangeComplete = {onRegionChangeComplete}
                onPress = {onMapPress}>
                    <Marker
                        coordinate = {initialRegion}   
                    />
                    {destination != null ?
                        <MapViewDirections 
                            origin = {initialRegion}
                            destination = {destination}
                            apikey = {API_KEY}
                            strokeWidth = {4}
                            strokeColor='blue'
                            mode = 'WALKING'
                        />:
                        null
                    }
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent : 'center'
    },
    map:{
        ...StyleSheet.absoluteFillObject
    }
})

export default GoogleMaps