import React, {useEffect} from 'react'
import { View, StyleSheet,TouchableOpacity} from 'react-native'
import envs from '../../config/env'
import {GET_AUDIO} from '../../constants/endpoints'
import RecordingIcon from '../Icons/RecordingIcon'
import { Audio } from 'expo-av';
const {DEV_BACKEND_URL} = envs

const AudioComponent = ({audio}) =>{
    const uri = DEV_BACKEND_URL + GET_AUDIO + audio;
    const [sound, setSound] = React.useState();
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( {uri: uri}
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    return (
            <TouchableOpacity onPress onPress={playSound}>
                <View style = {styles.container}>
                    <RecordingIcon width ={45} height ={45} isRecording={false}/>
                    <View style = {styles.line}></View>
                </View>
            </TouchableOpacity>
    )
}

export default AudioComponent
const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#FF7A7A'

    },
    line:{
        height: 1,
        borderWidth : 0.7,
        width: 250,
        marginLeft: 10,

    },


    
})