import React, { useState, useEffect } from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Header from '../components/Common/Header'
import BackGround from '../components/Common/BackGround'
import MenuButton from '../components/Common/MenuButton'
import DestinationSearch from '../components/Maps/DestinationSearch'
import GoogleMaps from '../components/Maps/GoogleMaps';


const MapScreen = ({navigation}) => {
    const [destination, setDestination] = useState(null)
    const [region, setRegion] = useState(null)
    console.log(destination)
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="MAPA"/>
            <View style = {styles.googleMapsContainer}>
                <DestinationSearch setRegion = {setRegion}/>
                <View style = {styles.mapContainer}>
                    <GoogleMaps region = {region} destination = {destination} setRegion = {setRegion} setDestination = {setDestination}/>
                </View>
            </View>
            <MenuButton width = '40' height = '40' navigation = {navigation}/>
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