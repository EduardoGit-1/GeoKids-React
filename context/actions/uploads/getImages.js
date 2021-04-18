import axios from '../../../helpers/axiosInstance';
import {GET_IMAGES} from '../../../constants/endpoints'


const getImages = async()=>{
    let data = {
        userID : "60720a4a45a05903da30adf8",
        destination: {
            designation:"Padaria machado",
            placeID: "ChIJAAAAAAAAAAARioTVFMWdzic",
            latitude : 41.56606420111469,
            longitude : -8.477735146880152
        }
    }
    axios.post(GET_IMAGES, data)
    .then((response) => {
        console.log(response)
        return response.blob()
    })
    .catch((err) => {

    });
}

export default getImages