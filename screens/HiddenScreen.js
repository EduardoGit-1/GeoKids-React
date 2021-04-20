import React, {useContext } from 'react';
import {View} from 'react-native'
import Navigator from '../components/Navigation/Navigator'
import LoginScreen from './LoginScreen'
import {GlobalContext} from '../context/Provider'
const HiddenScreen = ({navigation}) =>{
    return (<View></View>)

}

export default HiddenScreen