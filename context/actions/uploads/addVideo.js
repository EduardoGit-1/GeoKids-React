import axios from '../../../helpers/axiosInstance';
// import axios from 'axios'
import {SEND_VIDEO} from '../../../constants/endpoints'
import {saveVideoUpload} from '../../../context/storage/AsyncStorage'

const sendVideo = (destination, userID, videoURI) => (dispatch)=>{
    let form_data = new FormData();
    for ( var key in destination ) {
        form_data.append(key, destination[key]);
    }
    form_data.append('video', {
        uri: videoURI,
        name : "video.mp4",
        type: 'video/mp4'
    })
    form_data.append("userID", userID)
    axios.post(SEND_VIDEO, form_data, {
        headers: {"Content-Type": "multipart/form-data"}
    }).then((response) =>{
        dispatch({
            type : 'REGISTER_VIDEO_SUCCESS',
            payload: response.data
        })
        saveVideoUpload(destination, response.data)

    }).catch(err =>{
        console.log(err)
    })

}

export default sendVideo;