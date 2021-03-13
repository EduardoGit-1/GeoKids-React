import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Image, View, Alert} from 'react-native';
import MapView from 'react-native-maps';


const CONTAINER_HEIGHT = 480
const SCREEN_WIDTH = 300
const ASPECT_RATIO = CONTAINER_HEIGHT / SCREEN_WIDTH
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const GoogleMaps = () =>{
    const [initialRegion, setRegion] = useState(null)
    useEffect(() =>{
        const findCoordinates = () =>{
            navigator.geolocation.getCurrentPosition(
                position => {
                    var lat = parseFloat(position.coords.latitude)
                    var long = parseFloat(position.coords.longitude)
                    var region = {
                        latitude: lat,
                        longitude: long,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                        }
                    setRegion(region);
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        };
        return findCoordinates()       
    })
    if(initialRegion === null){
        return <Text>Loading</Text>
    }else{
        return(
            <MapView style = {styles.map} provider = {MapView.PROVIDER_GOOGLE}
                initialRegion={initialRegion}>
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