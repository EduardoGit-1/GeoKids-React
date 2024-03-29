import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PreviousButton from '../../Common/PreviousButton'
import NextButton from '../../Common/NextButton'
import PreviousArrow from '../../Common/PreviousArrow'
import NextArrow from '../../Common/NextArrow'
import characters from '../../../assets/login/characters/CharactersSVG'
import CharacterImage from './CharacterImage'

// let imgID = 0
const Character = ({state, setCharacter, setStep, signUp}) =>{
    let imgID = state.characterID
    //const [imgID, setImageID] = useState(state.characterID)
    const [isArrowVisible, setArrowVisible] = useState(true)
    
    const nextImg = () =>{
        //setImageID(imgID + 1)
        imgID += 1
        if(imgID > characters.length - 1){
            //setImageID(0)
            imgID = 0
        }
        
        setCharacter(imgID)
    }

    const previousImg = () =>{
        imgID -= 1
        //setImageID(imgID - 1)
        if(imgID < 0){
            imgID = characters.length - 1
            //setImageID(characters.length - 1)
        }
        setCharacter(imgID)
    }

    const selectImage = () =>{
        setArrowVisible(!isArrowVisible)
        setCharacter(imgID)
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
            <TouchableOpacity onPress={nextImg}>
                <NextArrow width = {27} height = {27} />
            </TouchableOpacity>
            )
        }else{
            return(null)
        }
    }

    let left = leftArrow(isArrowVisible);
    let right = rightArrow(isArrowVisible);
    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Escolhe a tua personagem:</Text>
            <View style={styles.characterContainer}>
                {left}
                {/* <TouchableOpacity  onPress={selectImage}>
                    <Image style = {styles.character} source ={imgSrc}/>
                </TouchableOpacity> */}
                <TouchableOpacity  onPress={selectImage}>
                    <CharacterImage width = {50} height = {170} logo = {characters[imgID]} index = {imgID}/>
                </TouchableOpacity>
                {right}
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {[styles.formStepArrow, !isArrowVisible ? {marginRight:'10%'} : {marginRight:'48.5%'}]}
                 onPress = {previousForm}>
                    <PreviousButton width = {27} height = {27} />
                    <Text style = {styles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.formStepArrow, !isArrowVisible ? styles.visible : styles.notVisible]} 
                onPress = {nextForm}>
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
    },
    title:{
        fontFamily : 'Lexa-Mega',
        fontSize : 18,
        textAlign: 'center'
    },
    buttonContainer:{
        flexDirection : 'row',
    },
    buttonText: {
        fontFamily : 'Lexa-Mega',
        fontSize : 12,
        padding: 10
    },
    formStepArrow: {
        flexDirection: 'row',
        alignItems : 'center',
   
    },
    visible:{
        display:'flex',
    },
    notVisible:{
        display:'none'
    }
})

export default Character