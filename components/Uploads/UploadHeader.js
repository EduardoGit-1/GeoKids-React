import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import UploadHeaderIcon from '../Icons/UploadHeaderIcon';

const UploadHeader = ({title, arrayLength}) =>{
    if (arrayLength > 0 ){
        return (
            <View style = {styles.container}>
                <UploadHeaderIcon width = {50} height= {50} title = {title}/>
                <Text style = {styles.title}>{title}</Text>
            </View>
        )
    }else{
        return null
    }

        
  
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    title:{
        fontFamily: 'Lexa-Mega',
        fontSize: 20,
        marginLeft: 15,
    }
})

export default UploadHeader