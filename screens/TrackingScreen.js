import React, {useContext, useEffect} from 'react';
import {View, StyleSheet,StatusBar, FlatList} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import Route from '../components/Routes/Route';
import {GlobalContext} from '../context/Provider'
import {loadRoutes} from '../context/storage/AsyncStorage'
const TrackingScreen = ({navigation}) =>{
    const {routeState, routeDispatch, authState:{user}} = useContext(GlobalContext)
    useEffect(()=>{
        loadRoutes().then(routes => 
            routeDispatch({type:'GET_ROUTES_SUCCESS', payload: routes})
        )
    },[])
    const renderItem = ({item}) =>(
        <Route origin = {item.origin} destination = {item.destination} duration = {item.duration} distance = {item.distance} avatarIndex = {user.characterID}/>
    )

    return(
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <BackGround/>
            <Header title ="PERCURSOS"/>
            <View style = {{height: 590}}>
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
            </View>

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