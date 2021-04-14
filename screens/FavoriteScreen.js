import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Alert} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'

const FavoriteScreen = ({navigation}) =>{
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
        backgroundColor : "#E0D8D8",
        overflow: 'hidden'
    },

})

export default FavoriteScreen