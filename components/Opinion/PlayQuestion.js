import React ,{useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DislikeIcon from '../Icons/OpinionIcons/DislikeIcon';
import LikeIcon from '../Icons/OpinionIcons/LikeIcon';
import GirlIcon from '../Icons/OpinionIcons/GirlIcon';
const PlayQuestion = ({isPlayfull, updateAnswerState}) =>{
    const [isSelected, setSelected] = useState(isPlayfull != undefined ? isPlayfull : null)
    const answerFunction = (bool) =>{
        if(isSelected == null || isSelected == undefined){
            setSelected(bool)
        }else{
            setSelected(!isSelected)
        }
    }
    useEffect(() => {
        updateAnswerState({isPlayfull : isSelected})
    },[isSelected])
    const size = 40
    return(
    <View style = {styles.contaniner}>
        <View style = {styles.questionContainer}>
            <View style = {styles.textContainer}>
                <Text style = {[styles.text]}>Gostas de brincar neste lugar?</Text>
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
        <GirlIcon width = {100} height = {100}/>
    </View>
    )
}

export default PlayQuestion

const styles = StyleSheet.create({
    contaniner:{
        flexDirection : 'row',
        backgroundColor: '#D9FFCA',
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
    textContainer:{
        width: 200,
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
    text:{
        fontFamily: 'Lexa-Mega',
        fontSize:14,
        textAlign: 'center'
    },

})
