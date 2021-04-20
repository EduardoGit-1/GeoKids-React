import axios from '../../../helpers/axiosInstance';
// import axios from 'axios'
import {SEND_TEXT} from '../../../constants/endpoints'
import {saveTextUpload} from '../../../context/storage/AsyncStorage'

const sendText = (destination, userID, text) => (dispatch)=>{
    let form_data = new FormData();
    for ( var key in destination ) {
        form_data.append(key, destination[key]);
    }
    form_data.append("text", text)
    form_data.append("userID", userID)

    axios.post(SEND_TEXT, form_data, {
        headers: {"Content-Type": "multipart/form-data"}
    }).then((response) =>{
        dispatch({
            type : 'REGISTER_TEXT_SUCCESS',
            payload: response.data
        })
        saveTextUpload(destination, response.data)

    }).catch(err =>{
        console.log(err)
    })

}

export default sendText;