import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Alert} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {mapStyle} from '../../constants/mapStyle'
import envs from '../../config/env'
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../../constants/screenSize'

const {GOOGLE_API_KEY} = envs
const GoogleMaps = ({onPOIClick, currentPosition, region, setRegion, destination, isTracking, setCurrentPosition, setIsMoving, setDistance, onMapPress, onMarkerPress, isRouting}) =>{

    const onUserLocationChange = (e) =>{
            let location = {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                // latitudeDelta: LATITUDE_DELTA,
                // longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: 0.002,
                longitudeDelta: 0.002,
            }
            setCurrentPosition(location)
            if(isTracking){setRegion(location)}   
    }

    const onRegionChangeComplete = () =>{
        setRegion(null)
    }



    if(currentPosition === null){
        return <Text>Loading</Text>
    }else{
        return(
            <MapView style = {styles.map}
                customMapStyle = {mapStyle} 
                provider = {MapView.PROVIDER_GOOGLE}
                initialRegion={currentPosition}
                region = {region}
                // animateToRegion = {region}
                showsUserLocation = {true}
                followsUserLocation = {isTracking}
                onUserLocationChange={onUserLocationChange}
                onRegionChangeComplete = {onRegionChangeComplete}
                onPoiClick = {onPOIClick}
                onPress = {onMapPress}>
                    {/* <Marker coordinate = {currentPosition}>
                            <Image style = {styles.customMarker} source = {require('../../assets/characterTeste.png')}/>
                    </Marker>  */}
                    {destination != null && isTracking === false && isRouting === false? 
                        <Marker key = {2} coordinate = {destination} onPress = {onMarkerPress}/>
                    :destination != null && isTracking === false && isRouting?
                        [
                            <MapViewDirections 
                                key = {1}
                                origin = {currentPosition}
                                destination = {destination}
                                apikey = {GOOGLE_API_KEY}
                                strokeWidth = {4}
                                strokeColor='#FF7A7A'
                                mode = 'WALKING'
                                language = "pt"
                            />,
                            <Marker key = {2} coordinate = {destination} onPress = {onMarkerPress}/>,
                        ]
                        : destination != null && isTracking && isRouting?
                            [
                                <MapViewDirections 
                                key = {1}
                                style = {{display: 'none'}}
                                origin = {currentPosition}
                                destination = {destination}
                                apikey = {GOOGLE_API_KEY}
                                strokeWidth = {4}
                                strokeColor='#FF7A7A'
                                mode = 'WALKING'
                                onReady = {result =>{setDistance(result.distance); setIsMoving(true)}}
                                />,
                                <Marker key = {2} coordinate = {destination}/>,
                            ]
                            
                        :
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
    },
    customMarker:{
        width: 40, 
        height: 40, 
        borderRadius: 40/ 2,
        borderWidth: 2,
        borderColor: 'black',
        
    }
})

export default GoogleMaps