import {DEV_BACKEND_URL, GOOGLE_API_KEY} from '@env'

const devEnironmentVariables = {
    DEV_BACKEND_URL,
    GOOGLE_API_KEY,
}

const prodEnvironmentVariables = {
    DEV_BACKEND_URL,
    GOOGLE_API_KEY
}

export default __DEV__ ? devEnironmentVariables : prodEnvironmentVariables