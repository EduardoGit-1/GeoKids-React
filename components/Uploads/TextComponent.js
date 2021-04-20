import React from 'react'
import { View, StyleSheet,Image, TextInput} from 'react-native'


const TextComponent = ({text}) =>{

    return (
        <TextInput 
            style = {styles.textInput}
            multiline={true}
            editable={false} 
            selectTextOnFocus={false}
      
            padding = {10}
            value={text}
        />

    )
}

export default TextComponent
const styles = StyleSheet.create({
    textInput:{
        textAlignVertical: 'top',
         width: 330,
         height:150,
         borderRadius: 10,
         borderWidth: 1,
         backgroundColor: 'white',
         fontFamily: 'Lexa-Mega',
         paddingBottom: 30,   
    },

    
})