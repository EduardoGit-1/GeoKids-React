import React, {useState, useEffect, useContext, useRef} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import answersInitialState from '../context/initialStates/answersInitialState'
import Header from '../components/Common/Header'
import BackGround from '../components/Common/BackGround'
import MenuButton from '../components/Common/MenuButton'
import DestinationSearch from '../components/Maps/DestinationSearch'
import GoogleMaps from '../components/Maps/GoogleMaps';
import Geocoder from 'react-native-geocoding';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../constants/screenSize'
import envs from '../config/env'
import registerRoute from '../context/actions/tracking/saveRoute';
import { initialPursuitState } from '../context/initialStates/trackingState';
import Animated from 'react-native-reanimated';
import {GlobalContext} from '../context/Provider'
import DirectionsPopUp from '../components/Maps/DirectionsPopUp'
import ClassificationPopUp from '../components/Classification/ClassificationPopUp';
import {getFavoritePlace, removeFavorites, removeUploads} from '../context/storage/AsyncStorage'
import registerClassification from '../context/actions/favorites/saveClassification'
const {GOOGLE_API_KEY} = envs

Geocoder.init(GOOGLE_API_KEY)
const MapScreen = ({navigation}) => {
    //removeFavorites()
    //removeUploads()
    const [distance, setDistance] = useState()
    const [isMoving, setIsMoving] = useState(false)
    const [isRouting, setIsRouting] = useState(false)
    const [currentPosition, setCurrentPosition] = useState()
    const [destination, setDestination] = useState()
    const [region, setRegion] = useState()
    const [isTracking, setTrackingOption] = useState(false)
    const [pursuitState, setPursuitState] = useState(initialPursuitState)
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [classificatonVisibily, setClassificationVisibility] = useState(false)
    const [classification, setClassification] = useState(null)
    const {routeDispatch, favouritesDispatch,authState:{user}} = useContext(GlobalContext)

    const bs = useRef(null);
    const fall = new Animated.Value(1);

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
        bs.current.snapTo(0)
    }
    const onPOIClick = e =>{
        console.log(e.nativeEvent)
        setDestination({
            designation: e.nativeEvent.name,
            placeID : e.nativeEvent.placeId,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        })
        bs.current.snapTo(0)
    }
    const onMarkerPress = () =>{
        setDestination(null)
        setIsRouting(false)
        bs.current.snapTo(1)
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
                const {latitude:destinationLat, longitude:destinationLong, designation:destination_address, placeID} = destination
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
                        placeID : placeID
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
        }
    }, [isTracking])

    useEffect(() =>{
        //console.log(`Distancia: ${distance}`)
        if(distance <= 0.01 && distance != null){
            setEndTime(performance.now())
            setTrackingOption(false)
            setIsMoving(false)
            setDestination(null)
            setIsRouting(false)
            console.log("yeeei, chegaste boi")
        }
    }, [distance])

    useEffect(() =>{
        if(isMoving === true){
            console.log("onReady chamado")
            const pursuit = {...pursuitState}
            pursuit.distance = Math.round(distance * 10) / 10
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
            duration = Math.round(duration * 10) / 10
            setPursuitState(prevState => ({
                ...prevState,
                duration: duration,
                isDone : true,
            }), console.log(pursuitState))
            setEndTime(null)
            setStartTime(null)
            
        }

    }, [endTime])

    useEffect(()=>{
        if(pursuitState.isDone){
            pursuitState.userID = user.id
            registerRoute(pursuitState)(routeDispatch)
            setPursuitState(initialPursuitState)
        }
    }, [pursuitState.isDone])

    
    const onDirectionsClick = () =>{
        setIsRouting(true)
        bs.current.snapTo(1)
    }
    const onStartRouteClick = () =>{
        setIsRouting(true)
        setTrackingOption(true)
        bs.current.snapTo(1)
    }
    
    const onOpinionClick = (stars, isFavorite) =>{
        bs.current.snapTo(1)
        let userID = user.id
        let answers = classification.answers;
        setClassificationVisibility(false)

        navigation.navigate("Opiniões", {destination, userID, stars, isFavorite, answers})

    }
    const onEvaluateClick = () =>{
        bs.current.snapTo(1)
        getFavoritePlace(destination.placeID).then(favourite =>{
            if(favourite != null){
                setClassification(favourite)
            }else{
                setClassification({
                    destination,
                    isFavorite : false,
                    stars: 0,
                    answers: answersInitialState
                })
            }
            
        }).then(() => {setClassificationVisibility(true)})


    }
    const onEvaluationBack = (stars, isFavorite) =>{
        if(classification.isFavorite === isFavorite && classification.stars === stars){
            console.log("yep")
            setClassificationVisibility(false)
            setClassification(null)
            setDestination(null)
        }else{
            console.log("no")
            let data = classification
            data.userID = user.id
            data.isFavorite = isFavorite
            data.stars = stars
            registerClassification(data)(favouritesDispatch)
            setClassificationVisibility(false)
            setClassification(null)
            setDestination(null)
        }
    }
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="MAPA"/>
            {classification != null ? <ClassificationPopUp destination = {destination} isVisible = {classificatonVisibily} classification = {classification} onOpinionClick = {onOpinionClick} onCancel = {onEvaluationBack}/>: null}
            <View style = {styles.googleMapsContainer}>
                <DestinationSearch setRegion = {setRegion}/>
                <View style = {styles.mapContainer}>
                    <DirectionsPopUp 
                    ref = {bs} 
                    fall ={fall}
                    destination = {destination}
                    onDirectionsClick= {onDirectionsClick}
                    onStartRouteClick = {onStartRouteClick}
                    onEvaluateClick = {onEvaluateClick}
                    />
                    <GoogleMaps 
                        isTracking = {isTracking}
                        isMoving = {isMoving}
                        isRouting = {isRouting}
                        distance = {distance}
                        pursuitState = {pursuitState}
                        region = {region} 
                        destination = {destination}
                        currentPosition = {currentPosition}
                        onMapPress = {onMapPress}
                        onPOIClick = {onPOIClick}
                        onMarkerPress = {onMarkerPress}
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
    googleMapsContainer:{
        width: '80%',
        alignItems: 'center',
        overflow:'hidden'
    },
    mapContainer:{
        height: 490,
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
    },


})

export default MapScreen;