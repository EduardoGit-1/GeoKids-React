import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Header from '../components/Header'
import GoogleMaps from '../components/Maps/GoogleMaps';
import BackGround from '../components/BackGround'
import MenuButton from '../components/MenuButton'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MapScreen = ({navigation}) => {
    
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="MAPA"/>
            <View style = {styles.mapContainer}>
                <GoogleMaps/>
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
    mapContainer:{
        height: 480,
        width : 300,
        marginTop: 50,
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
        marginTop : 30,
        marginLeft : 30,
        alignItems : 'center',
        alignSelf: 'flex-start',
        
    },
    text:{
        fontFamily: 'Lexa-Mega'
    }


})

export default MapScreen;