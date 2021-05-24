import React, { useEffect, useContext,useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, FlatList} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import {GlobalContext} from '../context/Provider'
import FavoritePlace from '../components/Favourites/FavoritePlace'
import {loadFavourites} from '../context/storage/AsyncStorage'

const FavoriteScreen = ({navigation}) =>{
    const {favouritesState} = useContext(GlobalContext)
    const [refresh, setRefresh] = useState(false)

    const renderItem = ({item}) =>(
        <FavoritePlace destination = {item.destination} stars = {item.stars} isFavorite = {item.isFavorite} answers = {item.answers} navigation = {navigation}/>
    )


    return(
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <BackGround/>
            <Header title ='LOCAIS'/>
            <View style = {styles.placeContainer}>
                <FlatList
                    style = {styles.scrollView} 
                    data = {favouritesState.favourites}
                    extraData = {favouritesState.loading}
                    renderItem = {renderItem}
                    keyExtractor={item => item.id}
                />
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
        
    },
    placeContainer:{
        height:580,
        width: 350,
    },

})

export default FavoriteScreen