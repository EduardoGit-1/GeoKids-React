import axios from 'axios';
import envs from '../config/env'
const axiosInstance = axios.create({
    baseURL: envs.DEV_BACKEND_URL,
})

export default axiosInstance