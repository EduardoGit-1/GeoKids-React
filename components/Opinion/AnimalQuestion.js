import React , {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DislikeIcon from '../Icons/OpinionIcons/DislikeIcon';
import LikeIcon from '../Icons/OpinionIcons/LikeIcon';
import AnimalIcon from '../Icons/OpinionIcons/AnimalIcon';
const AnimalQuestion = ({hasAnimals, updateAnswerState}) =>{
    const [isSelected, setSelected] = useState(hasAnimals != undefined ? hasAnimals : null)
    const answerFunction = (bool) =>{
        if(isSelected == null || isSelected == undefined){
            setSelected(bool)
        }else{
            setSelected(!isSelected)
        }
    }
    useEffect(() => {
        updateAnswerState({hasAnimals : isSelected})
    },[isSelected])
    
    const size = 40
    return(
    <View style = {styles.contaniner}>
        <AnimalIcon width = {95} height = {95}/>
        <View style = {styles.questionContainer}>
            <View style = {styles.textContainer}>
                <Text style = {[styles.text]}>Há animais neste local?</Text>
            </View>
            <View style = {styles.answerContainer}>
                <TouchableOpacity onPress = {() => answerFunction(true)} style = {{marginRight: 30}}>
                    <View style = {isSelected && isSelected != null ? styles.selected : styles.notSelected}>
                        <LikeIcon width = {size} height = {size}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => answerFunction(false)}>
                    <View style = {!isSelected && isSelected != null ? styles.selected : styles.notSelected}>
                        <DislikeIcon width = {size} height = {size}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

export default AnimalQuestion

const styles = StyleSheet.create({
    contaniner:{
        marginTop:30,
        flexDirection : 'row',
        backgroundColor: '#FDD99B',
        borderRadius: 15,
        borderWidth: 1.5,
        padding: 10,
        width: 350,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    questionContainer:{
        alignItems:'center',
    },
    answerContainer:{
        flexDirection:'row',
        padding: 5,
        marginTop: 10,
    },
    selected:{
        borderRadius: 10,
        borderWidth: 1.5,
        height: 50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#EDEDED'
    },
    notSelected:{
        height: 50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
    },
    textContainer:{
        width: 200,
    },
    text:{
        fontFamily: 'Lexa-Mega',
        fontSize:14,
        textAlign: 'center'
    },

})
