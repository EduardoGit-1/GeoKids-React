import axios from '../../../helpers/axiosInstance';
import {REGISTER_USER} from '../../../constants/endpoints'

const register = ({nickname, characterID}) => 
    (dispatch, setModalVisible) =>{
        console.log(`Nickname ${nickname}, characterID: ${characterID}`)
        axios.post(REGISTER_USER, {
            nickname : nickname,
            characterID : characterID
        })
        .then((response) => {
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: response.data,
        });
        })
        .catch((err) => {
        setModalVisible(true)
        dispatch({
            type: 'REGISTER_FAIL',
            payload: err.response ? err.response.data : {error: 'Something went wrong, try agin'},
        });
        });
};

export default register