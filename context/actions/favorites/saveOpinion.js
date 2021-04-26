import axios from '../../../helpers/axiosInstance';
import {SAVE_OPINION} from '../../../constants/endpoints'
import {saveClassification} from '../../storage/AsyncStorage'

const registerOpinion = (opinion, navigation) => (dispatch) =>{
    dispatch({
        type:'SET_LOADING',
        payload: true
    })
    axios.post(SAVE_OPINION, opinion)
    .then((response) => {
        console.log(response.data)
        saveClassification(response.data)
        dispatch({
            type: 'REGISTER_PLACE_SUCCESS',
            payload: response.data
        })
    }).then(() =>{

        navigation.navigate("Favoritos") ;
    })
    .catch((err) => {
        console.log(err)
    });
}


export default registerOpinion