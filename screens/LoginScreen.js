import React, { useState, useContext, useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Character from '../components/Login/SelectCharacter/SelectCharacter'
import InsertNickname from '../components/Login/InsertNickName/InsertNickname'
import BackGround from '../components/Common/BackGround'
import Navigator from '../components/Navigation/Navigator'
import register from '../context/actions/auth/registerUser'
import WarningModal from '../components/Common/WarningModal';
import {GlobalContext} from '../context/Provider'
import {loadUser, removeUser} from '../context/storage/AsyncStorage'

const Login = ({Drawer}) =>{
    const [step, setStep] = useState(1)
    const [characterID, setCharacterID] = useState(0)
    const [nickname, setNickname] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const {authDispatch, authState:{isLoggedIn}} = useContext(GlobalContext)
    useEffect(() =>{
        loadUser().then(authState => 
                authDispatch({type:'LOGIN', payload: authState})
            )
    }, [])
    // removeUser()
    
    const handleSignUpError = () =>{
        setModalVisible(!modalVisible)
        setStep(step - 1)
    }
    const signUp = () =>{
        register({nickname, characterID})(authDispatch, setModalVisible)
    }
    var state = {
                step: step,
                characterID : characterID,
                nickname : nickname
    }
    let selectForm = (step) => {
        switch(step){
            case 1:
                return <InsertNickname state = {state} setNickname = {setNickname} setStep = {setStep}/>
                
            case 2:
                return <Character state = {state} setCharacter = {setCharacterID} setStep = {setStep} signUp = {signUp}/>
            
        }
    }
    if(step === 3 || isLoggedIn){
        return <Navigator Drawer = {Drawer}/>
    }


    return(
        <View style = {styles.index}>
            <BackGround/>
            <WarningModal 
                text = "A alcunha já está a ser usada!"
                modalVisible = {modalVisible} 
                onClose = {handleSignUpError}
                />
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