import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import CustomMarker from '../components/Maps/CustomMarker';

const UploadScreen = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="UPLOADS"/>
            <MenuButton width = '40' height = '40' navigation = {navigation}/>
            <CustomMarker/>
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

export default UploadScreen