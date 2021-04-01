import axios from '../../../helpers/axiosInstance';
import {REGISTER_ROUTE} from '../../../constants/endpoints'

const registerRoute = pursuitState => {
    pursuitState.userID = "6064d37c8863c7163a524423"
    axios.post(REGISTER_ROUTE, pursuitState)
    .then((response) => {
        //console.log(response)
    })
    .catch((err) => {
        console.log(err)
    });
}

export default registerRoute