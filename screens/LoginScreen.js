import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Character from '../components/Login/SelectCharacter/Character'
import InsertNickname from '../components/Login/InsertNickName/InsertNickname'
import BackGround from '../components/Common/BackGround'
import MapScreen from './MapScreen'
import { NavigationContainer } from '@react-navigation/native';
import UploadScreen from './UploadScreen'
import TrackingScreen from './TrackingScreen'
import FavoriteScreen from './FavoriteScreen'
import Navigator from '../components/Navigation/Navigator'

const Login = ({Drawer}) =>{
    const [step, setStep] = useState(1)
    const [character, setCharacter] = useState(0)
    const [nickname, setNickname] = useState('')

    var state = {
                step: step,
                character : character,
                nickname : nickname
            }
    let selectForm = (step) => {
        switch(step){
            case 1:
                return <InsertNickname state = {state} setNickname = {setNickname} setStep = {setStep}/>
                
            case 2:
                return <Character state = {state} setCharacter = {setCharacter} setStep = {setStep}/>
        }
    }
    if(step === 3){
        return (    
            <Navigator Drawer = {Drawer}/>
        )
    }
    return(
        <View style = {styles.index}>
            <BackGround/>
            <View style= {styles.logo}>
                    <Image styles = {styles.logo} source ={require('../assets/logos/geoKidsLogoLogin.png')}/>
            </View>
                {selectForm(step)}
        </View>
    )
}



const styles = StyleSheet.create({
    index : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    logo: {
        bottom: 50
    }
})

export default Login