import React, { useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image,StatusBar, ScrollView, FlatList} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import Route from '../components/Routes/Route';
import getRoutes from '../context/actions/tracking/getRoutes';
import {GlobalContext} from '../context/Provider'
import {loadRoutes} from '../context/storage/AsyncStorage'
const TrackingScreen = ({navigation}) =>{
    const {routeState, routeDispatch} = useContext(GlobalContext)
    // initializeRouteArray()
    // useEffect(() =>{
    //     getRoutes(user.id)(routeDispatch)
    // }, [])
    useEffect(() =>{
        loadRoutes().then(routes => 
                routeDispatch({type:'GET_ROUTES_SUCCESS', payload: routes})
            )
    }, [])

    const renderItem = ({item}) =>(
        <Route origin = {item.origin} destination = {item.destination} duration = {item.duration} distance = {item.distance}/>
    )

    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="PERCURSOS"/>
            {routeState.routes != [] ?
                    <FlatList
                        style = {styles.scrollView} 
                        data = {routeState.routes}
                        renderItem = {renderItem}
                        keyExtractor={item => item.id}
                    />
            :
            null
            }
            <MenuButton width = '35' height = '35' navigation = {navigation}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor : "#E0D8D8",
        overflow: 'hidden',

       
    },
    scrollView:{
        marginTop: 35,
        borderRadius: 10
        
    }

})

export default TrackingScreen