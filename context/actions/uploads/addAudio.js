import axios from '../../../helpers/axiosInstance';
// import axios from 'axios'
import {SEND_AUDIO} from '../../../constants/endpoints'
import {saveAudioUpload} from '../../../context/storage/AsyncStorage'

const sendVideo = (destination, userID, audioURI) => (dispatch)=>{
    let form_data = new FormData();
    for ( var key in destination ) {
        form_data.append(key, destination[key]);
    }
    form_data.append('audio', {
        uri: audioURI,
        name : "audio.mp3",
        type: 'audio/mp3'
    })
    form_data.append("userID", userID)
    axios.post(SEND_AUDIO, form_data, {
        headers: {"Content-Type": "multipart/form-data"}
    }).then((response) =>{
        dispatch({
            type : 'REGISTER_AUDIO_SUCCESS',
            payload: response.data
        })
        saveAudioUpload(destination, response.data)

    }).catch(err =>{
        console.log(err)
    })

}

export default sendVideo;