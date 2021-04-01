import {Modal, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react';
import WarningIcon from '../Common/Logos/WarningIcon'
import OkIcon from './Logos/OkIcon';

const QuestionModal = ({text, onSuccess, onCancel, isModalVisible}) =>{

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
            onCancel()
        }}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <WarningIcon width = {80} height = {80}/>
            <Text style={styles.text}>{text}</Text>
            <View style = {styles.buttonView}>
                <TouchableOpacity style = {{marginRight : 100}}onPress = {() => onCancel()}>
                    <View>
                        <Text style = {styles.text}>Não</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => onSuccess()}>
                    <View>
                        <OkIcon width = {45} height = {45}/>
                    </View>
                </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    )
}

export default QuestionModal
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems: "center",

    },
    modal: {
        margin: 30,
        backgroundColor: "#BACEE8",
        borderRadius : 10,
        borderWidth : 1,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20
      },
    text:{
        fontFamily : 'Lexa-Mega',
        fontSize : 18,
        textAlign: 'center',
        marginTop: 25,
        marginBottom : 25,
    },
    buttonView:{
        flexDirection: 'row',
        marginHorizontal : 40,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },

})