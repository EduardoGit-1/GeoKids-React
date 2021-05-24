import React, {useReducer, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import {GlobalContext} from '../context/Provider'
import answersReducer from '../context/reducers/answersReducer'
import Header from '../components/Common/Header';
import PreviousButton from '../components/Common/PreviousButton'
import NextButton from '../components/Common/NextButton'
import BackGround from '../components/Common/BackGround'
import { ScrollView } from 'react-native-gesture-handler';
import PlayQuestion from '../components/Opinion/PlayQuestion';
import AnimalQuestion from '../components/Opinion/AnimalQuestion';
import HouseQuestion from '../components/Opinion/HouseQuestion';
import SunQuestion from '../components/Opinion/SunQuestion';
import ShadowQuestion from '../components/Opinion/ShadowQuestion';
import saveOpinion from '../context/actions/favorites/saveOpinion'


const OpinionScreen = ({navigation, route}) =>{
    const {destination, userID, stars, isFavorite, answers} = route.params
    const [answersState, answersDispatch] = useReducer(answersReducer, answers)
    useEffect(()=>{
        answersDispatch({
            type: 'GET_ANSWERS',
            payload: answers
        })
    }, [answers])
    const {favouritesDispatch} = useContext(GlobalContext)
    console.log(answersState)
    const updateAnswersState = (payload) =>{
        answersDispatch({
            type: 'UPDATE_STATE', 
            payload: payload
        })
    }

    const sendOpinion = () =>{
        let data = {
            userID : userID,
            stars : stars,
            isFavorite : isFavorite,
            answers : answersState,
            destination: destination
        }
        saveOpinion(data, navigation)(favouritesDispatch)
    }
    return(
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <BackGround/>
            <Header title = "OPINIÕES"/>
            <Text style = {styles.title}>{destination.designation}</Text>
            <ScrollView style = {styles.scrollView}>
                <PlayQuestion isPlayfull = {answersState.isPlayfull} updateAnswerState = {updateAnswersState}/>
                <AnimalQuestion hasAnimals = {answersState.hasAnimals} updateAnswerState = {updateAnswersState}/>
                <HouseQuestion isNear = {answersState.isNear} updateAnswerState = {updateAnswersState}/>
                <SunQuestion isSunny = {answersState.isSunny} updateAnswerState = {updateAnswersState}/>
                <ShadowQuestion hasShadow = {answersState.hasShadow} updateAnswerState = {updateAnswersState}/>
            </ScrollView>
            <View style = {styles.buttonContainer}>
                <View style = {{marginRight: '40%'}}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Mapa')}>
                            <View style = {styles.backButton}>
                                <PreviousButton width = {25} height = {25}/>
                                <Text style = {[styles.text, {marginLeft : 10, fontSize:15}]}>Voltar</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress = {sendOpinion}>
                            <View style = {styles.nextButton}>
                                <Text style = {[styles.text, {marginRight : 10, fontSize:15}]}>Enviar</Text>
                                <NextButton width = {25} height = {25}/>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor : "#E0D8D8",
        overflow: 'hidden',
        alignItems:'center'
    },
    scrollView:{
        marginTop : 10,
    },
    text:{
        fontFamily: 'Lexa-Mega'
    },
    title:{
        fontFamily: 'Lexa-Mega',
        fontSize: 20,
        padding: 15
    },
    buttonContainer:{
        flexDirection :'row',
    },
    backButtonContainer:{

    },
    backButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        alignContent:'center',
        padding: 10,
        marginTop: 10,
    },
    nextButtonContainer:{

    },
    nextButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        alignContent:'center',
        padding: 10,
        marginTop: 10,
    },


})

export default OpinionScreen