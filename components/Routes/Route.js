import React from 'react'
import { View, StyleSheet, Text , Image} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {mapStyle} from '../../constants/mapStyle'
import MapViewDirections from 'react-native-maps-directions'
import DistanceIcon from '../Icons/DistanceIcon'
import DurationIcon from '../Icons/DurationIcon'
import TrackIcon from '../Icons/TrackIcon'
import envs from '../../config/env'
const {GOOGLE_API_KEY} = envs

const Route = ({origin, destination, distance, duration}) =>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Percurso efetuado:</Text>
            <View style={styles.mapContainer}>
                <MapView 
                    //initialRegion = {origin}
                    style = {styles.map}
                    customMapStyle = {mapStyle}
                    provider = {MapView.PROVIDER_GOOGLE}
                >
                    <Marker coordinate = {origin}>
                            <Image style = {styles.customMarker} source = {require('../../assets/characterTeste.png')}/>
                    </Marker> 
                    <Marker coordinate = {destination}/>
                    <MapViewDirections 
                        origin = {origin}
                        destination = {destination}
                        apikey = {GOOGLE_API_KEY}
                        strokeWidth = {4}
                        strokeColor='#FF7A7A'
                        mode = 'WALKING'
                    />
                </MapView>
            </View>
            <View style = {styles.routeInfoContainer}>
                <Text style = {styles.subTitles}>Trajeto:</Text>
                <View>
                    <View style = {styles.pathContainer}>
                        <TrackIcon width = {26} height = {26} type = 'origin'/>
                        <Text style = {styles.text}>{origin.designation}</Text>
                    </View>
                    <View style = {styles.pathContainer}>
                        <TrackIcon width = {26} height = {26} type = 'destination'/>
                        <Text style = {styles.text}>{destination.designation}</Text>
                    </View>
                </View>
                <Text style = {styles.subTitles}>Detalhes do percurso:</Text>
                <View style = {styles.routeDetailsContainer}>
                    <View style = {styles.pathContainer}>
                        <DurationIcon width = {26} height = {26}/>
                        <Text style = {styles.text}>{duration} seg.</Text>
                    </View>
                    <View style = {[styles.pathContainer, {marginLeft: 0}]}>
                        <DistanceIcon width = {26} height = {26}/>
                        <Text style = {styles.text}>{distance} m.</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Route
const styles = StyleSheet.create({
    container:{
        borderWidth : 1,
        borderRadius : 10,
        borderColor: 'black',
        elevation : 10,
        backgroundColor: '#BACEE8',
        width : 320,
        alignItems: 'center',
        marginBottom: 50,
 
        //justifyContent: 'center'
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
    mapContainer:{
        height: 180,
        width : 280,
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
    },
    title:{
        alignSelf: 'flex-start',
        fontFamily: 'Lexa-Mega',
        fontSize: 15,
        paddingLeft: 15,
        paddingTop: 15,
    },
    subTitles: {
        padding: 15,
        fontFamily: 'Lexa-Mega',
        fontSize: 13,
    },
    text:{
        fontFamily: 'Lexa-Mega',
        fontSize: 12,
        marginLeft: 10,
    },
    routeInfoContainer:{
        alignSelf: 'flex-start',
        
    },
    pathContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        alignContent:'center',
        alignItems: 'center',
        marginBottom: 15
    },
    routeDetailsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    customMarker:{
        width: 40, 
        height: 40, 
        borderRadius: 40/ 2,
        borderWidth: 2,
        borderColor: 'black',
    }

    
})