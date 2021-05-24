import React, {useRef} from 'react'
import { View, StyleSheet} from 'react-native'
import envs from '../../config/env'
import { Video} from 'expo-av';
import {GET_VIDEO} from '../../constants/endpoints'
const {DEV_BACKEND_URL} = envs

const VideoComponent = ({video}) =>{
    const uri = DEV_BACKEND_URL + GET_VIDEO + video;
    // const uri = "https://geokids-307016.nw.r.appspot.com/api" + GET_VIDEO + video;
    const [status, setStatus] = React.useState({});

    const videoRef = useRef(null)
    return (
    <View style={styles.container}>
        <Video
        ref = {videoRef}
        style={styles.video}
        source={{
            uri: uri,
        }}
        useNativeControls
        resizeMode="cover"
        shouldPlay = {false}
        isLooping = {false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    </View> 

    )
}

export default VideoComponent
const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderRadius:10,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        overflow:'hidden'
      },
    video: {
        alignSelf: 'center',
        width: 330,
        height: 220,
      },

    
})