import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import NextButton from '../../components/Common/NextButton'
import { TouchableOpacity } from 'react-native-gesture-handler';


const WarningIndex = ({state, setStep}) =>{

    const nextForm = () =>{
        setStep(state.step + 1)
    }
    return (
        <View style = {styles.box}>
            <View style={{padding:20}}>
                <Text style={styles.title}>Olá GeoKid!</Text>
            </View>
            <View>
                <Text style={[styles.text, {fontSize: 17}]}>Antes de embarcares nesta aventura, tem atenção e não utilizes nomes ou dados que te identifiquem!</Text>
            </View>
            <View style = {{marginTop: 20}}>
                <Text style={[styles.text]}>Opta por utilizares um nickname engraçado e não utilizes o teu nome própio!</Text>
            </View>
            <View style = {{position:'absolute', bottom: 10, right: 10}}>
                <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row'}} onPress = {nextForm}>
                    <Text style = {[styles.buttonText, {marginRight: 10}]}>Vamos começar!</Text>
                    <NextButton width = {27} height = {27} />
                </TouchableOpacity>
            </View>
        </View>    
        )
}

const styles = StyleSheet.create({
    box:{
        width : 300,
        height: 350,
        borderWidth : 1,
        backgroundColor : '#BACEE8',
        alignItems : 'center',
        elevation: 20,
        borderRadius: 15,

    },
    nickNameInput:{
        width : 236,
        height : 34,
        backgroundColor : '#FFFFFF',
        opacity: 0.7,
        borderRadius : 10,
        fontFamily : 'Lexa-Mega',
        textAlign: 'center'
    },
    text:{
        fontFamily : 'Lexa-Mega',

        paddingRight :10,
        paddingLeft: 10,
        textAlign:'center'
    },
    buttonText: {
        fontFamily : 'Lexa-Mega',
        fontSize : 12,

    },
    title : {
        color : '#FF7A7A',
        fontFamily: 'Lexa-Mega',
        fontSize: 30,
    }
})
export default WarningIndex