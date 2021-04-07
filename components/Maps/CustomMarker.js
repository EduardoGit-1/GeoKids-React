import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const CustomMarker = () =>{

    return(
            <Image style = {styles.image} source = {require('../../assets/characterTeste.png')}/>

    )
}

export default CustomMarker


const styles = StyleSheet.create({
    container:{
        width :150,
        height : 150,
        borderWidth: 2,
        borderRadius:75
    },
    image:{
        width: 60, 
        height: 60, 
        borderRadius: 60/ 2,
        borderWidth: 2,
        borderColor: 'black',
        resizeMode : 'cover'
    }
})