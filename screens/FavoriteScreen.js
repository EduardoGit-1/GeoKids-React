import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Alert} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'

const FavoriteScreen = ({navigation}) =>{
    const [currentPosition, setCurrentPosition] = useState()
    //console.log("teste")

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)
                setCurrentPosition({
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                });
           
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    useEffect(() =>{
        getCurrentPosition()
 }, [])
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="FAVORITOS"/>
            <View>

                <MenuButton width = '40' height = '40' navigation = {navigation}/>
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

})

export default FavoriteScreen