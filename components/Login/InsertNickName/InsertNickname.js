import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import NickNameIcon from './Icons/NickNameIcon'
import NextButton from '../../Common/NextButton'
import { TouchableOpacity } from 'react-native-gesture-handler';


const InsertNickname = ({state, setNickname, setStep}) =>{
    const onChangeText = textValue =>{
        setNickname(textValue);
    }
    const nextForm = () =>{
        setStep(state.step + 1)
    }
    return (
        <View style = {styles.box}>
            <NickNameIcon width = '70' height = '70'/>
            <Text style={styles.title}>Escolhe um nickname divertido:</Text>
            <TextInput
            style={styles.nickNameInput}
            onChangeText={onChangeText}
            />
            <View style = {{alignSelf: 'flex-end',marginRight : 30}}>
                <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row'}} onPress = {nextForm}>
                    <Text style = {styles.buttonText}>Próximo</Text>
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
        justifyContent: 'space-evenly',
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
    title:{
        fontFamily : 'Lexa-Mega',
        fontSize : 18,
        textAlign: 'center'
    },
    buttonText: {
        fontFamily : 'Lexa-Mega',
        fontSize : 12,
        marginRight : 10,
    }
})
export default InsertNickname