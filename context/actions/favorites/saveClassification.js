import axios from '../../../helpers/axiosInstance';
import {SAVE_CLASSIFICATION} from '../../../constants/endpoints'
import {saveClassification, loadFavourites} from '../../storage/AsyncStorage'

const registerClassification = (classification) => (dispatch) =>{
    dispatch({
        type:'SET_LOADING',
        payload: true
    })
    axios.post(SAVE_CLASSIFICATION, classification)
    .then((response) => {
        console.log(response.data)
        saveClassification(response.data)
        dispatch({
            type: 'REGISTER_PLACE_SUCCESS',
            payload: response.data
        })

    })
    .catch((err) => {
        console.log(err)
    });
}


export default registerClassification