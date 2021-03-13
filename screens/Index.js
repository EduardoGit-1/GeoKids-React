import React, { useState } from 'react';
import {View,StyleSheet, Image, TouchableOpacity} from 'react-native';
import Character from '../components/Login/SelectCharacter/Character'
import InsertNickname from '../components/Login/InsertNickName/InsertNickname'  
import BackGround from '../components/BackGround'
const Index = () =>{
    const testFunc = () =>{
        console.log('funciona')
    }
    return(
        <View style = {styles.index}>
            <BackGround/>
            <View style= {styles.logoContainer}>
                <TouchableOpacity  onPress={testFunc}>
                    <Image styles = {styles.logo} source ={require('../assets/logos/geokidsLogo5.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    index : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    logoContainer: {
        
    },
    logo: {
        
    }
})

export default Index