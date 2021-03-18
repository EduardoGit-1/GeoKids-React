import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const CONTAINER_HEIGHT = 480
const CONTAINER_WIDTH = 300
const ASPECT_RATIO = CONTAINER_HEIGHT / CONTAINER_WIDTH
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const API_KEY = 'AIzaSyCM7K4DnUmRJVGMwVWs9yxSQgGydHAtWVg'
const GoogleMaps = ({setDestination, region, setRegion, destination, isTracking}) =>{
    const [initialRegion, setInitialRegion] = useState(null)
    const onMapPress = (e) =>{
        if(isTracking === true){
            setDestination({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            })
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
                    {destination != null && isTracking ?
                        [<MapViewDirections 
                            origin = {initialRegion}
                            destination = {destination}
                            apikey = {API_KEY}
                            strokeWidth = {4}
                            strokeColor='#FF7A7A'
                            mode = 'WALKING'
                        />,
                        <Marker coordinate = {destination}/>]
                        :null
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