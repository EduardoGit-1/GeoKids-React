import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import NickNameIcon from './Icons/NickNameIcon'
import NextButton from '../../Common/NextButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PreviousButton from '../../Common/PreviousButton';


const InsertNickname = ({state, setNickname, setStep, signUp}) =>{
    const onChangeText = textValue =>{
        setNickname(textValue);
    }
    const previousForm = () =>{
        setStep(state.step - 1)
    }
    return (
        <View style = {styles.box}>
            <NickNameIcon width = '70' height = '70'/>
            <Text style={styles.title}>Dá um nome à tua personagem:</Text>
            <View style = {{marginTop: 20}}>
                <TextInput
                style={styles.nickNameInput}
                onChangeText={onChangeText}
                />
            </View>

            <View style = {{flexDirection : 'row', justifyContent:'space-between', marginTop: 47}}>
                <View style = {{marginRight : 50}}>
                    <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row'}} onPress = {previousForm}>
                    <PreviousButton width = {27} height = {27} />
                        <Text style = {[styles.buttonText, {marginLeft: 10}]}>Anterior</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row'}} onPress = {signUp}>
                        <Text style = {[styles.buttonText, {marginRight: 10}]}>Próximo</Text>
                        <NextButton width = {27} height = {27} />
                    </TouchableOpacity>
                </View>
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

    }
})
export default InsertNickname