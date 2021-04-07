import axios from '../../../helpers/axiosInstance';
import {REGISTER_ROUTE} from '../../../constants/endpoints'

const registerRoute = pursuitState => (dispatch) =>{
    axios.post(REGISTER_ROUTE, pursuitState)
    .then((response) => {
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: response.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: err.response ? err.response.data : {error: 'Something went wrong, try agin'},
        });
    });
}

export default registerRoute