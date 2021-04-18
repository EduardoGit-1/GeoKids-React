import React from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native'
import envs from '../../config/env'
import {GET_VIDEO} from '../../constants/endpoints'
import RecordingIcon from '../Icons/RecordingIcon'
const {DEV_BACKEND_URL} = envs

const RecordAudioComponent = ({recording, isModalVisibile, startRecording, stopRecording, setModalVisible}) =>{
    const switchFunction = () => {
        if(recording){
            console.log('yes')
            return stopRecording()
        }else{
            console.log('noo')
            return startRecording()
        }
        
    }
    return (
        
            <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisibile}
            onCancelRequest = {() =>{
                setModalVisible(false)
            }}
            >
                <View style = {styles.centeredView}>
                <View style = {styles.container}>
                    <View style = {{flexDirection:'row'}}>
                    <TouchableOpacity onPress = {switchFunction}>
                        <View style = {[styles.buttonContainer, recording ? {marginRight: 230,}: null]}>
                            <RecordingIcon width = {50} height={50} isRecording={recording}/>
                        </View>
                    </TouchableOpacity>
                        <Text style = {[styles.text, recording ? {position: 'absolute', left:100}: null]}>{recording ? "A gravar..." : "Começa a gravação!"}</Text>
                    </View>
                </View>
                </View>
            </Modal>


    )
}

export default RecordAudioComponent
const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    container:{
        width: 350,
        borderRadius: 15,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#E6EEF9',
    },
    buttonContainer:{
        flexDirection : 'row',

    },
    text:{
        fontFamily:'Lexa-Mega',
        fontSize: 15,
        padding:10
    }

    
})