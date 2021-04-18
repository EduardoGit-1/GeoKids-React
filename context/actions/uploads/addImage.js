import axios from '../../../helpers/axiosInstance';
// import axios from 'axios'
import {SEND_IMAGE} from '../../../constants/endpoints'
import {saveImageUpload} from '../../../context/storage/AsyncStorage'

const sendImage = (destination, userID, imageURI) => (dispatch)=>{
    let form_data = new FormData();
    console.log(destination)
    for ( var key in destination ) {
        form_data.append(key, destination[key]);
    }
    form_data.append('image', {
        uri: imageURI,
        name : "Teste",
        type: 'image/png'
    })
    form_data.append("userID", userID)
    axios.post(SEND_IMAGE, form_data, {
        headers: {"Content-Type": "multipart/form-data"}
    }).then((response) =>{
        dispatch({
            type : 'REGISTER_IMAGE_SUCCESS',
            payload: response.data
        })
        saveImageUpload(destination, response.data)

    }).catch(err =>{
        console.log(err)
    })

}

export default sendImage;