import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
const HomeScreen = () =>{
    return(
        <View style = {styles.index}>
            <StatusBar hidden = {true} />
            <View style= {styles.logo}>
                    <Image styles = {styles.logo} source ={require('../assets/logos/geokidsLogo3.png')}/>
                {/* <Text style = {styles.text}>PedoApp Logo</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    index : {
        backgroundColor: 'darkslateblue',
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1
    },
    logo: {
        bottom: 50
    }
})

export default HomeScreen