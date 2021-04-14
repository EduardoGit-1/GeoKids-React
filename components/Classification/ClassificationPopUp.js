import {Modal, StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'
import React ,{useState, useEffect}from 'react';
import FavoritesHeartIcon from '../Icons/FavoritesHeartIcon'
import SmileIcon from '../Icons/SmileIcon'
import PreviousButton from '../Common/PreviousButton';
import Stars from 'react-native-stars';
import StarIcon from '../Icons/StarIcon'

const ClassificationPopUp = ({destination, isVisible, onCancel, classification, onOpinionClick}) =>{
    const [isFavorite, setIsFavorite] = useState(classification.isFavorite)
    const [stars, setStars] = useState(classification.stars)
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
            onCancel()
        }}
      >
          <View style = {styles.container}>
            <View style = {styles.modal}>
                <View>
                    <Text style = {styles.title}>{destination != null ? destination.designation : "A carregar"}</Text>
                    <View style = {styles.buttonContainer}>
                        <Text style = {styles.text}>Classificar:</Text>
                        <View style = {{marginRight: 15}}>
                            <Stars
                                default = {stars}
                                update = {(val) => {setStars(val)}}
                                spacing = {4}
                                starSize = {20}
                                count = {5}
                                fullStar = {<StarIcon width = {25} height = {25} isFull = {true}/>}
                                emptyStar = {<StarIcon width = {25} height = {25} isFull = {false}/>}
                            />
                        </View>

                    </View>
                    <View style = {[styles.buttonContainer]}>
                        <Text style = {styles.text}>Marcar como favorito:</Text>
                        <TouchableOpacity onPress = {() => setIsFavorite(!isFavorite)}style = {{marginRight : 15}}>
                            <View>
                                <FavoritesHeartIcon width = {30} height={30} isFavorite = {isFavorite}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{margin: 10}}>
                    <TouchableOpacity onPress = {() => onOpinionClick(stars, isFavorite)}>
                        <View style = {styles.opinionContainer}>
                            <View style = {{width: 180}}>
                            <Text style = {{fontFamily: 'Lexa-Mega', fontSize: 14, color:'#FFFFFF', textAlign:'center'}}>Dá a tua opinião sobre este local!</Text>
                            </View>
                            <SmileIcon width = {35} height={35}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress = {() => {onCancel(stars, isFavorite)}}>
                        <View style = {styles.backButton}>
                            <PreviousButton width = {20} height = {20}/>
                            <Text style = {[styles.text, {marginLeft : 3}]}>Voltar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems: "center",
    },
    opinionContainer:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F44336',
        padding : 5,
        margin: 10,
        borderRadius: 20,
        borderWidth : 1,
    },
    modal:{
        borderRadius: 10,
        borderWidth: 1,
        width : 350,
        backgroundColor: '#BACEE8'
    },
    buttonContainer:{
        marginTop: 15,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    backButton:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },    
    title:{
        fontFamily : 'Lexa-Mega',
        fontSize : 18,
        padding: 10,
    },
    text:{
        fontFamily : 'Lexa-Mega',
        fontSize : 13,
        padding : 5,
        marginLeft : 5
      
    },    
    starsInput:{
        width : 30,
        height : 34,
        marginRight : 15,
        backgroundColor : '#FFFFFF',
        opacity: 0.7,
        borderRadius : 10,
        fontFamily : 'Lexa-Mega',
        textAlign: 'center'
    }, 
})
export default ClassificationPopUp