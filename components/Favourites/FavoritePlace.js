import React, {useRef, useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {mapStyle} from '../../constants/mapStyle'
import TrackIcon from '../Icons/TrackIcon'
import Stars from 'react-native-stars';
import StarIcon from '../Icons/StarIcon'
import FavoritesHeartIcon from '../Icons/FavoritesHeartIcon'
import CheckBoxIcon from '../Icons/CheckBoxIcon'
import UploadLogo from '../Logos/UploadLogo'
import answersInitialState from '../../context/initialStates/answersInitialState'

const FavoritePlace = ({destination, stars, isFavorite, answers, navigation}) =>{
    console.log(answers)
    const mapRef = useRef(null)
    const onMapReady = () =>{
        mapRef.current.fitToCoordinates([destination], { edgePadding: null, animated: false })
    }
    const onSeeUploadsClick = () => {
        navigation.navigate("Uploads", {destination});
    }
    return (
        <View style = {styles.container}>
            <View>
                <View style = {styles.pathContainer}>
                    <TrackIcon width = {35} height = {35} type = 'origin'/>
                    <View>
                        <Text style = {styles.title}>{destination.designation}</Text>
                        <View style = {{alignSelf:'flex-start', marginLeft: 10, flexDirection: 'row'}}>
                            <Stars
                            default={stars}
                            spacing={4}
                            count={5}
                            disabled = {true}
                            fullStar = {<StarIcon width = {15} height = {15} isFull = {true}/>}
                            emptyStar = {<StarIcon width = {15} height = {15} isFull = {false}/>}
                            />
                            <View style = {{marginLeft:1.5, marginTop:0.6}}>
                                <FavoritesHeartIcon width = {15} height = {15} isFavorite= {isFavorite}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.mapContainer}>
                <MapView 
                    //initialRegion = {origin}
                    ref = {mapRef}
                    style = {styles.map}
                    customMapStyle = {mapStyle}
                    provider = {MapView.PROVIDER_GOOGLE}
                    onMapReady = {onMapReady}
                >
                    <Marker coordinate = {destination}/>
                </MapView>
            </View>
            <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                <View style = {{padding:5, marginTop: 10}}>
                    <View style = {styles.answerContainer}>
                        <CheckBoxIcon width = {20} height = {20} value = {answers.isPlayfull}/>
                        <Text style = {styles.text}>Brincar</Text>
                    </View>
                    <View style = {styles.answerContainer}>
                        <CheckBoxIcon width = {20} height = {20} value = {answers.hasAnimals}/>
                        <Text style = {styles.text}>Animais</Text>
                    </View>
                    <View style = {styles.answerContainer}>
                        <CheckBoxIcon width = {20} height = {20} value = {answers.isNear}/>
                        <Text style = {styles.text}>Perto de casa</Text>
                    </View>
                </View>
                <View style = {{padding:5, marginTop: 10}} >
                    <View style = {styles.answerContainer}>
                        <CheckBoxIcon width = {20} height = {20} value = {answers.isSunny}/>
                        <Text style = {styles.text}>Sol</Text>
                    </View>
                    <View style = {styles.answerContainer}>
                        <CheckBoxIcon width = {20} height = {20} value = {answers.hasShadow}/>
                        <Text style = {styles.text}>Sombra</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style = {{padding:10}} onPress={onSeeUploadsClick}>
                <View style = {styles.uploadButton}>
                    <UploadLogo width= {20} height = {20}/>
                    <Text style = {{fontFamily: 'Lexa-Mega', color:'#FFFFFF', marginLeft: 6}}>Ver uploads</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FavoritePlace
const styles = StyleSheet.create({
    container:{
        borderWidth : 1,
        borderRadius : 10,
        borderColor: 'black',
        elevation : 10,
        backgroundColor: '#BACEE8',
        marginBottom: 30,
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
    mapContainer:{
        height: 180,
        width : 310,
        alignSelf:'center',
        marginTop: 15,
        borderRadius: 10,
        borderColor:"black",
        borderWidth : 1.5,
        backgroundColor: "white",
        overflow : 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginRight : 20,
        marginLeft : 20,
    },
    title:{
        fontFamily: 'Lexa-Mega',
        marginLeft: 10,
        fontSize: 15
    },
    subTitles: {
        padding: 15,
        fontFamily: 'Lexa-Mega',
        fontSize: 13,
    },
    text:{
        fontFamily: 'Lexa-Mega',
        marginLeft: 10,
        
        fontSize: 12
    },

    pathContainer:{
        flexDirection: 'row',
        alignContent:'center',
        alignItems: 'center',
        padding: 10,

    },
    answerContainer:{
        flexDirection : 'row',
        padding:5,
        alignItems:'center',
    },
    uploadButton:{
        alignSelf:'center',
        flexDirection: 'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        width: 160,
        borderWidth: 1.5,
        padding: 4,
        borderRadius: 6,
        backgroundColor: '#F44336'
    }
    
})