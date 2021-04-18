import axios from '../../../helpers/axiosInstance';
import {GET_IMAGES} from '../../../constants/endpoints'


const getVideo = () =>{
    let url = '/upload/videos/stream/607af7f1d892357d737585a5'
    console.log("estou a ser chamado")
    axios.get(url)
    .then((response) => {
        console.log(response)
        return response
    })
    .catch((err) => {
        console.log(err)
    });
}

export default getVideo