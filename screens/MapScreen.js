import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Common/Header'
import BackGround from '../components/Common/BackGround'
import MenuButton from '../components/Common/MenuButton'
import DestinationSearch from '../components/Maps/DestinationSearch'
import GoogleMaps from '../components/Maps/GoogleMaps';
import FavoritesLogo from '../components/Logos/FavoritesLogo';
import MapLogo from '../components/Logos/MapLogo';
import Geocoder from 'react-native-geocoding';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../constants/screenSize'
import envs from '../config/env'
import registerRoute from '../context/actions/tracking/saveRoute';
import { initialPursuitState } from '../context/initialStates/trackingState';
const {GOOGLE_API_KEY} = envs

Geocoder.init(GOOGLE_API_KEY)
const MapScreen = ({navigation}) => {
    const [distance, setDistance] = useState()
    const [isMoving, setIsMoving] = useState(false)
    const [currentPosition, setCurrentPosition] = useState()
    const [destination, setDestination] = useState()
    const [region, setRegion] = useState()
    const [isTracking, setTrackingOption] = useState(false)
    const [pursuitState, setPursuitState] = useState(initialPursuitState)
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    const onMapPress = (e) =>{
        Geocoder.from(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)
		.then((json) => {
        	var designation = json.results[3].formatted_address;
            setDestination(prevState => ({
                ...prevState,
                designation
            }))
            console.log(designation)
		})
		.catch(error => console.warn(error));
        let latitude = e.nativeEvent.coordinate.latitude;
        let longitude = e.nativeEvent.coordinate.longitude;
        setDestination(prevState => ({
            ...prevState,
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }))

    }
    //currentPosition
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
            position => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)
                setCurrentPosition({
                    latitude: lat,
                    longitude: long,
                    // latitudeDelta: LATITUDE_DELTA,
                    // longitudeDelta: LONGITUDE_DELTA,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, [])

    useEffect(() =>{
        if(isTracking && destination !== null){
            console.log(destination)
            setStartTime(performance.now())
            Geocoder.from(currentPosition.latitude, currentPosition.longitude)
            .then((json) => {
                const {latitude:originLat, longitude: originLong} = currentPosition
                const {latitude:destinationLat, longitude:destinationLong, designation:destination_address} = destination
                var origin_address = json.results[3].formatted_address;
                setPursuitState({
                    origin : {
                        designation : origin_address,
                        latitude: originLat,
                        longitude: originLong
                    },
                    destination : {
                        designation :destination_address,
                        latitude: destinationLat,
                        longitude: destinationLong,
                    },
                    duration: null, 
                    distance: null,
                    isDone: false,
                })
            })
            .catch(error => console.warn(error));
        }else{
            setDestination(null)
            setStartTime(null)
            setIsMoving(false)
            //setPursuitState(null)
        }
    }, [isTracking])

    useEffect(() =>{
        //console.log(`Distancia: ${distance}`)
        if(distance <= 0.01 && distance != null){
            setEndTime(performance.now())
            setTrackingOption(false)
            setIsMoving(false)
            setDestination(null)
            console.log("yeeei, chegaste boi")
        }
    }, [distance])


    
    useEffect(() =>{
        if(isMoving === true){
            console.log("onReady chamado")
            const pursuit = {...pursuitState}
            pursuit.distance = distance
            setPursuitState(pursuit)
        }else{
            setDistance(null)
        }
    }, [isMoving])

    useEffect(() =>{
        if(endTime != null){
            let duration = endTime - startTime
            duration /= 1000
            console.log(`StartTime: ${startTime}, EndTime: ${endTime}`)
            setPursuitState(prevState => ({
                // origin: {...prevState.origin},
                // destination: {...prevState.destination},
                // distance: {...prevState.distance},
                ...prevState,
                duration: duration,
                isDone : true,
            }), console.log(pursuitState))
            //registerRoute(pursuitState)
            setEndTime(null)
            setStartTime(null)
            
        }

    }, [endTime])

    useEffect(()=>{
        if(pursuitState.isDone){
            registerRoute(pursuitState)
        }
    }, [pursuitState.isDone])

    const handleTrackingOption = () =>{
        setTrackingOption(!isTracking)
    }

    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="MAPA"/>
            <View style = {styles.googleMapsContainer}>
                <DestinationSearch setRegion = {setRegion}/>
                <View style = {styles.mapContainer}>
                    <GoogleMaps 
                        isTracking = {isTracking}
                        isMoving = {isMoving}
                        distance = {distance}
                        pursuitState = {pursuitState}
                        region = {region} 
                        destination = {destination}
                        currentPosition = {currentPosition}
                        onMapPress = {onMapPress}
                        setIsMoving = {setIsMoving}
                        setRegion = {setRegion}
                        setCurrentPosition = {setCurrentPosition} 
                        setDestination = {setDestination}
                        setTrackingOption = {setTrackingOption}
                        setPursuitState = {setPursuitState}
                        setDistance = {setDistance}
                        />
                </View>
            </View>
            <MenuButton width = '40' height = '40' navigation = {navigation}/>
            <View style = {{position:'absolute', bottom: 20}}>
                <TouchableOpacity style = {{alignItems: 'center'}} onPress = {handleTrackingOption}>
                    <MapLogo width = {45} height = {45}/>
                    {isTracking ? <Text style = {styles.text}>Parar</Text> : <Text style = {styles.text}>Começar</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor : "#E0D8D8",
        overflow: 'hidden'
    },
    googleMapsContainer:{
        width: '80%',
        alignItems: 'center',
        overflow:'hidden'
    },
    mapContainer:{
        height: 480,
        width : 300,
        marginTop: 15,
        borderRadius: 15,
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
    buttonContainer:{
        marginTop : 0,
        marginLeft : 0,
        alignItems : 'center',
        alignSelf: 'flex-start',
        
    },
    text:{
        fontFamily: 'Lexa-Mega'
    }


})

export default MapScreen;