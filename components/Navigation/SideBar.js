import React from 'react'
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native'
import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



export default Sidebar = props =>{
    return(
        <ScrollView style={styles.scrollView}>
            <View style = {styles.header}>
                <Text style = {styles.title}>MENU</Text>
                <Image style = {styles.profile} source = {require('../../assets/characterTeste.png')}/>
                <Text style = {styles.nickname}>Eduardo</Text>
            </View>
            <View style = {styles.container}>
                <DrawerItemList {...props}/>
            </View>
        </ScrollView>
    )
}


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
        width : 100,
        height : 100,
        borderRadius:50,
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
        fontSize: 30,
        
    }
})