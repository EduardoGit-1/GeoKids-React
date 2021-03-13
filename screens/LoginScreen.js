import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Character from '../components/Login/SelectCharacter/Character'
import InsertNickname from '../components/Login/InsertNickName/InsertNickname'
import BackGround from '../components/BackGround'
import MapScreen from './MapScreen'
import { NavigationContainer } from '@react-navigation/native';
import UploadScreen from './UploadScreen'
import TrackingScreen from './TrackingScreen'
import FavoriteScreen from './FavoriteScreen'

const Login = ({Drawer}) =>{
    const [step, setStep] = useState(1)
    const [character, setCharacter] = useState(null)
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

    let currentForm = selectForm(step)
    if(step === 3){
        return (    
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Mapa">
                <Drawer.Screen name="Mapa" component={MapScreen} />
                <Drawer.Screen name="Uploads" component={UploadScreen} />
                <Drawer.Screen name="Tracking" component={TrackingScreen} />
                <Drawer.Screen name="Favoritos" component={FavoriteScreen} />
            </Drawer.Navigator>
        </NavigationContainer>)
    }
    return(
        <View style = {styles.index}>
            <BackGround/>
            <View style= {styles.logo}>
                    <Image styles = {styles.logo} source ={require('../assets/logos/geoKidsLogoLogin.png')}/>
            </View>
                {currentForm}
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