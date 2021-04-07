import axios from '../../../helpers/axiosInstance';
import {GET_ROUTES} from '../../../constants/endpoints'

const getRoutes = (userID) => (dispatch) =>{
    console.log(userID)
    axios.post(GET_ROUTES, {userID})
    .then((response) => {
        dispatch({
            type: 'GET_ROUTES_SUCCESS',
            payload: response.data,
        });
        console.log(response.data)
    })
    .catch((err) => {
        dispatch({
            type: 'GET_ROUTES_FAIL',
            payload: err.response ? err.response.data : {error: 'Something went wrong, try agin'},
        });
    });
}

export default getRoutes