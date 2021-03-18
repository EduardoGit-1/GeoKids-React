import React, { useState, useEffect } from 'react';
import {View, Text, StatusBar, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Header from '../components/Common/Header'
import BackGround from '../components/Common/BackGround'
import MenuButton from '../components/Common/MenuButton'
import DestinationSearch from '../components/Maps/DestinationSearch'
import GoogleMaps from '../components/Maps/GoogleMaps';
import FavoritesLogo from '../components/Logos/FavoritesLogo';
import MapLogo from '../components/Logos/MapLogo';


const MapScreen = ({navigation}) => {
    const [destination, setDestination] = useState(null)
    const [region, setRegion] = useState(null)
    const [isTracking, setTrackingOption] = useState(false)
    const handleTrackingOption = () =>{
        setTrackingOption(!isTracking)
        setDestination(null)
    }
    console.log(isTracking)
    console.log(destination)
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="MAPA"/>
            <View style = {styles.googleMapsContainer}>
                <DestinationSearch setRegion = {setRegion}/>
                <View style = {styles.mapContainer}>
                    <GoogleMaps isTracking = {isTracking} region = {region} destination = {destination} setRegion = {setRegion} setDestination = {setDestination}/>
                </View>
            </View>
            <MenuButton width = '40' height = '40' navigation = {navigation}/>
            <View style = {{position:'absolute', bottom: 20}}>
                <TouchableOpacity style = {{alignItems: 'center'}} onPress = {handleTrackingOption}>
                    {isTracking ? <MapLogo width = {45} height = {45}/> : <FavoritesLogo width = {50} height = {50}/>}
                    <Text style = {styles.text}>Track</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor : "#E0D8D8",
        overflow: 'hidden'
    },
    googleMapsContainer:{
        width: '80%',
        alignItems: 'center',
        overflow:'hidden'
    },
    mapContainer:{
        height: 480,
        width : 300,
        marginTop: 15,
        borderRadius: 15,
        borderColor:"black",
        borderWidth : 1.5,
        backgroundColor: "white",
        overflow : 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    buttonContainer:{
        marginTop : 0,
        marginLeft : 0,
        alignItems : 'center',
        alignSelf: 'flex-start',
        
    },
    text:{
        fontFamily: 'Lexa-Mega'
    }


})

export default MapScreen;