import {Modal, StyleSheet, Pressable, View, Text, TouchableOpacity} from 'react-native'
import React from 'react';
import WarningIcon from '../Common/Logos/WarningIcon'
import OkIcon from '../Icons/OkIcon';

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
              <View style = {styles.buttonContainer}>
                <OkIcon width = {35} height = {35}/>
                <Text style = {{fontFamily: 'Lexa-Mega', fontSize: 15, color : 'white'}}>Ok!</Text>
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
    buttonContainer:{
      flexDirection: 'row', 
      alignItems: 'center',
      padding:5,
      backgroundColor: '#45C3AD',
      borderRadius:10,
      borderWidth: 1,
    }

})