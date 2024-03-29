import React, {useContext} from 'react'
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native'
import {DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {GlobalContext} from '../../context/Provider'
import Avatar from '../Common/Avatar'
import avatars from '../../assets/login/characters/AvatarsSVG'

const Sidebar = props =>{
    const {authState:{user}} = useContext(GlobalContext)
    const { state, ...rest } = props;
    const newState = { ...state}
    newState.routes = newState.routes.filter(item => item.name !== "Opiniões" && item.name !== "Uploads")
    return(
        <ScrollView style={styles.scrollView}>
            <View style = {styles.header}>
                <Text style = {styles.title}>MENU</Text>
                <View style = {styles.profile}>
                    <Avatar width = {110} height = {110} logo = {avatars[user.characterID]}/>
                </View>
                    {/* <Image style = {styles.profile} source = {require('../../assets/characterTeste.png')}/> */}
                <Text style = {styles.nickname}>{user.nickname}</Text>
            </View>
            <View style = {styles.container}>
                <DrawerItemList state = {newState} {...rest}/>
            </View>
        </ScrollView>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: '#E6EEF9'
    },
    container:{
        flex:1,
    },
    header:{
        width : undefined,
        padding: 16,
        alignItems : 'center',
        backgroundColor: '#E6EEF9'
    },
    profile:{
        alignItems:'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width : 120,
        height : 120,
        borderRadius:60,
        borderWidth:3,
        borderColor: "black"
    },
    nickname:{
        fontFamily : 'Lexa-Mega',
        padding:10,
        fontSize: 20
    },
    title:{
        marginBottom: 15,
        padding : 15,
        // margin: 15,
        color : '#FF7A7A',
        fontFamily : 'Lexa-Mega',
        fontSize: 35,
        
    }
})