

const initialState = { videos:[]}


const videos = (state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_A_VIDEO":
            return{videos:[...state.videos,payload]}
        case "REMOVE_A_VIDEO":
            return{videos:state.videos.filter((e) => {return e.id!==payload.id;})}
        case "CLEAR_VIDEOS":
            return{videos:[]}
        default:
            return state;
    }
}

export default videos;

export const addAVideo = (current_video)=>{
    return{
        type:"ADD_A_VIDEO",
        payload:current_video
    }
}
export const removeAVideo = (current_video)=>{
    return{
        type:"REMOVE_A_VIDEO",
        payload:current_video
    }
}
export const clearVideos = (current_video)=>{
    return{
        type:"CLEAR_VIDEOS",
        payload:current_video
    }
}