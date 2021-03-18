import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
const CONTAINER_HEIGHT = 480
const CONTAINER_WIDTH = 300
//const ASPECT_RATIO = CONTAINER_HEIGHT / CONTAINER_WIDTH
export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.0922
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


