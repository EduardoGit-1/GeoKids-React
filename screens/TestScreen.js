import React, { useState } from 'react';
import {View,StyleSheet, Image, TouchableOpacity} from 'react-native';
import BackGround from '../components/Common/BackGround'
import DestinationSearch from '../components/Maps/DestinationSearch'

const TestScreen = ({navigation}) =>{
    return(
        <View style = {styles.index}>
            <BackGround/>
            <View style={{width:'80%', height: '80%'}}>
                <DestinationSearch/>
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

export default TestScreen