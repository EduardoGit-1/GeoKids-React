import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import PreviousButton from '../../PreviousButton'
import NextButton from '../../NextButton'
import PreviousArrow from '../../PreviousArrow'
import NextArrow from '../../NextArrow'

var imgID = 0
const character1 = require('../../../assets/login/characters/character1.png')
const character2 = require('../../../assets/login/characters/character2.png')
const character3 = require('../../../assets/login/characters/character3.png')
const character4 = require('../../../assets/login/characters/character4.png')
const characters = [character1, character2, character3, character4]

const Character = ({state, setCharacter, setStep}) =>{
    const [imgSrc, setImgSrc] = useState(characters[imgID])
    const [show, setShow] = useState(true)
    console.log(state)
    const nextImg = () =>{
        imgID += 1
        console.log("Next image: " + imgID)
        if(imgID > characters.length - 1){
            imgID = 0
        }
        setImgSrc(characters[imgID])
    }

    const previousImg = () =>{
        imgID -= 1
        console.log("Previous image: " + imgID)
        if(imgID < 0){
            imgID = characters.length - 1
            console.log(imgID)
        }

        setImgSrc(characters[imgID])
    }

    const selectImage = () =>{
        setShow(!show)
        setCharacter(characters[imgID])
        console.log(show)
    }
    const previousForm = () =>{
        setStep(state.step - 1)
    }
    const nextForm = () =>{
        setStep(state.step + 1)
    }

    const leftArrow = (show) =>{
        if(show === true){
            return(
            <TouchableOpacity  onPress={previousImg}>
                <PreviousArrow width = {27} height = {27} />
            </TouchableOpacity>)
        }else{
            return(null)
        }
    }
    const rightArrow = (show) =>{
        if(show === true){
            return(
            <TouchableOpacity  onPress={nextImg}>
                <NextArrow width = {27} height = {27} />
            </TouchableOpacity>
            )
        }else{
            return(null)
        }
    }

    let left = leftArrow(show);
    let right = rightArrow(show);

    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Escolhe o teu boneco!</Text>
            <View style={styles.characterContainer}>
                {left}
                <TouchableOpacity  onPress={selectImage}>
                    <Image style = {styles.character} source ={imgSrc}/>
                </TouchableOpacity>
                {right}
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row', marginRight: 40}} onPress = {previousForm}>
                    <PreviousButton width = {27} height = {27} />
                    <Text style = {styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{alignItems : 'center',flexDirection: 'row'}} onPress = {nextForm}>
                    <Text style = {styles.buttonText}>Próximo</Text>
                    <NextButton width = {27} height = {27} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width : 300,
        height: 350,
        borderWidth : 1,
        backgroundColor : '#BACEE8',
        alignItems : 'center',
        justifyContent: 'space-around',
        elevation: 20,
        borderRadius: 15,

    },
    characterContainer:{
        flexDirection : 'row',
        width : "100%",
        alignItems : 'center',
        justifyContent: 'space-evenly',
        
    },
    character:{
        width: 50, 
        height: 170,
        //borderRadius: 50/ 2
    },
    title:{
        
        fontFamily : 'Lexa-Mega',
        fontSize : 18,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontFamily : 'Lexa-Mega',
        fontSize : 12,
        padding: 10
    }
})

export default Character