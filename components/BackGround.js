import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/Header'

const BackGroundImage = () => {
    return(
        <ImageBackground  blurRadius = {0.50} style = {styles.backGroundImage} source = {require('../assets/backGroundImage.png')}/>
    )
}
const styles = StyleSheet.create({
    backGroundImage:{
        ...StyleSheet.absoluteFillObject,
    
    }

})

export default BackGroundImage;