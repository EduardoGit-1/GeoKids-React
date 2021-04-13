import axios from '../../../helpers/axiosInstance';
import {SAVE_CLASSIFICATION} from '../../../constants/endpoints'
import {saveClassification} from '../../storage/AsyncStorage'

const registerClassification = (classification) =>{
    axios.post(SAVE_CLASSIFICATION, classification)
    .then((response) => {
        console.log(response.data)
        saveClassification(response.data)
    })
    .catch((err) => {
        console.log(err)
    });
}


export default registerClassification