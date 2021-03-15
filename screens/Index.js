import React, {useContext } from 'react';
import Navigator from '../components/Navigation/Navigator'
import LoginScreen from './LoginScreen'
import {GlobalContext} from '../context/Provider'
const Index = ({Drawer}) =>{
    const {authState : {isLoggedIn}} = useContext(GlobalContext)
    console.log(isLoggedIn)
    if(isLoggedIn){
        return <Navigator Drawer = {Drawer}/>
    }else{
        return <LoginScreen Drawer = {Drawer}/>
    }

}

export default Index