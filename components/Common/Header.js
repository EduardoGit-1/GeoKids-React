import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import MapLogo from '../Logos/MapLogo'
import UploadLogo from '../Logos/UploadLogo'
import FavoritesLogo from '../Logos/FavoritesLogo'
import TrackingLogo from '../Logos/TrackingLogo'
const Header = ({title}) => {
    let logoWidth = 55
    let logoHeight = 55

    const getLogo = (title) =>{
        switch(title){
            case 'MAPA':
                return(<MapLogo width = {logoWidth + 5} height = {logoHeight + 5}/>)
            case 'UPLOADS':
                return(<UploadLogo width = {logoWidth} height = {logoWidth}/>)
            case 'PERCURSOS':
                return(<TrackingLogo width = {logoWidth} height = {logoHeight}/>)
            case 'FAVORITOS':
                return(<FavoritesLogo width = {logoWidth - 5} height = {logoHeight- 5}/>)
        }
    }
    let currentLogo = getLogo(title)
    return(
        <View style = {styles.header}>
            <View style = {styles.imageContainer}>
                {currentLogo}
                <Text stroke = 'black' fontWeight = "bold" style = {styles.text} >{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height : '13%',
        padding : 25,
        borderColor: '#EBEBEB',
        backgroundColor: '#F1F1F1',
        elevation: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    imageContainer:{
        flexDirection: 'row',
        alignItems: 'center'
        // marginLeft: 10,
        //alignItems: 'flex-start',
        //justifyContent: 'space-between'
    },
    text : {
        color : '#FF7A7A',
        marginLeft : 15,
        fontFamily: 'Lexa-Mega',
        fontSize: 30,
    }

})

export default Header;