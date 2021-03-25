import {Modal, StyleSheet, Pressable, View, Text, TouchableOpacity} from 'react-native'
import React from 'react';
import WarningIcon from '../Common/Logos/WarningIcon'
import OkIcon from './Logos/OkIcon';

const WarningModal = ({text, onClose, modalVisible}) =>{

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            onClose()
        }}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <WarningIcon width = {80} height = {80}/>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress = {() => onClose()}>
              <View>
                <OkIcon width = {50} height = {50}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
}

export default WarningModal
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