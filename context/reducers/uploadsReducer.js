const uploadReducer = (state, {type, payload}) =>{
    switch(type){
        case 'REGISTER_IMAGE_SUCCESS':
            let images = state.images;
            images.push(payload)
            return{
                ...state,
                images: images,
            }
        case 'REGISTER_VIDEO_SUCCESS':
            let videos = state.videos;
            videos.push(payload)
            return{
                ...state,
                videos: videos
            }
        case 'REGISTER_AUDIO_SUCCESS':
            let audios = state.audios;
            audios.push(payload)
            return{
                ...state,
                audios: audios
            }
        case 'REGISTER_FAIL':
            return {
                ...state,
                error: payload
            }
        case 'GET_UPLOADS_SUCCESS':
            console.log(`Payload: ${payload}`)
            return {
                ...payload,
            }  
        default:
            return state
    }
}
export default uploadReducer;