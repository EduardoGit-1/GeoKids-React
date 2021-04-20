import React from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity, TextInput} from 'react-native'
import {GET_VIDEO} from '../../constants/endpoints'
import RecordingIcon from '../Icons/RecordingIcon'
import SmileIcon from '../Icons/SmileIcon'
import NextButton from '../Common/NextButton'
import PreviousButton from '../Common/PreviousButton'


const AddTextComponent = ({isModalVisibile, setModalVisible, onTextSendClick}) =>{
    const [text, onChangeText] = React.useState(null);

    return (
        
            <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisibile}
            onRequestClose = {() =>{
                setModalVisible(false)
            }}
            //flexDirection:'row', padding:10, alignItems: 'center', position:'absolute', left:70,
            >
                <View style = {styles.centeredView}>
                    <View style = {styles.container}>
                        <View style = {{flexDirection:'row', alignItems:'center'}}>
                            <Text style = {styles.title}>Dá-nos a tua opinião!</Text>
                            <SmileIcon width= {30} height = {30}/>
                        </View>
                      <TextInput 
                      style = {styles.textInput}
                      multiline={true}
                        padding = {10}
                        onChangeText={onChangeText}
                        value={text}
                      />
                    <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {{marginRight: 125}} onPress = {() => setModalVisible(false)}>
                          <View style = {{flexDirection:'row', padding:10, alignItems: 'center'}}>
                            <PreviousButton width= {20} height = {20}/>
                            <Text style = {[styles.text, {marginLeft: 5,}]}>Voltar</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress = {() => {onTextSendClick(text); onChangeText(null)}}>
                          <View style = {{flexDirection:'row', padding:10, alignItems: 'center'}}>
                            <Text style = {[styles.text, {marginRight: 5,}]}>Enviar</Text>
                            <NextButton width= {20} height = {20}/>
                          </View>
                      </TouchableOpacity>
                    </View>  

                    </View>
                </View>
            </Modal>


    )
}

export default AddTextComponent
const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    container:{
        width: 350,
        borderRadius: 15,
        height: 260,
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
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    text:{
        fontFamily:'Lexa-Mega',

    },
    title:{
        fontFamily:'Lexa-Mega',
        fontSize: 15,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
    },
    textInput:{
    textAlignVertical: 'top',
     width: 300,
     height:150,
     borderRadius: 10,
     borderWidth: 1,
     backgroundColor: 'white',
     fontFamily: 'Lexa-Mega',
     paddingBottom: 30,   
    },


    
})