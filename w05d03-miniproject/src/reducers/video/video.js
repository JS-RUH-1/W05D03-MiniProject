const initialState={ video:{}};


const video = (state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_VIDEO":
            return{video:payload}
        case "CLEAR_VIDEO":
            return{video:{}}
        default:
            return state;
    }
}

export default video;

export const addVideo = (current_video)=>{
    return{
        type:"ADD_VIDEO",
        payload:current_video
    }
}
export const clearVideo = (current_video)=>{
    return{
        type:"CLEAR_VIDEO",
        payload:current_video
    }
}