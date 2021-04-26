import React, { useState, useContext, useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Character from '../components/Login/SelectCharacter/SelectCharacter'
import InsertNickname from '../components/Login/InsertNickName/InsertNickname'
import BackGround from '../components/Common/BackGround'
import Navigator from '../components/Navigation/Navigator'
import register from '../context/actions/auth/registerUser'
import WarningModal from '../components/Common/WarningModal';
import {GlobalContext} from '../context/Provider'
import {loadUser,removeUploads,removeFavorites, removeUser, removeRoutes, loadFavourites} from '../context/storage/AsyncStorage'
import WarningIndex from '../components/Login/WarningIndex';
import WarningIcon from '../components/Common/Logos/WarningIcon';

const Login = ({Drawer}) =>{
    // removeFavorites()
    // removeUploads()
    // removeRoutes()
    // removeUser()
    const [step, setStep] = useState(1)
    const [characterID, setCharacterID] = useState(0)
    const [nickname, setNickname] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const {authDispatch, favouritesDispatch, authState:{isLoggedIn}} = useContext(GlobalContext)
    useEffect(() =>{
        loadUser().then(authState => 
                authDispatch({type:'LOGIN', payload: authState})
            ).then(()=>{
                loadFavourites().then(favourites => 
                    favouritesDispatch({type:'GET_FAVORITES_SUCCESS', payload: favourites})
                )
            })
    }, [])
 
    
    const handleSignUpError = () =>{
        setModalVisible(!modalVisible)
        
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
                return <WarningIndex state = {state} setCharacter = {setCharacterID} setStep = {setStep}/>
            case 2:
                return <Character state = {state} setCharacter = {setCharacterID} setStep = {setStep}/>
            case 3:
                return <InsertNickname state = {state} setNickname = {setNickname} setStep = {setStep} signUp = {signUp}/>
            
        }
    }
    if(step === 4 || isLoggedIn){
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
            <View style= {[step == 1 ? {marginBottom:120} : {marginBottom:40}]}>
                    {step == 1 ? 
                        <WarningIcon width= {170} height= {170} />
                    :
                        <Image source ={require('../assets/logos/geoKidsLogoLogin.png')}/>
                    }
                    
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