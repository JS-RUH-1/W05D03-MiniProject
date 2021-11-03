const initialState = {
    videos: []
}

const Videos = (state = initialState, {type, payload}) => {

    switch (type) {
        case "ADD_VIDEO":
            return {videos: [...state.videos, payload]}

        case "DELETE_VIDEO":
            return {
                videos: state.videos.filter((element) => {
                  return element.id !== payload.id;
                }),
            };

        default:
            return state;
    }

}


export const addVideo = (data) => {
    return {
        type: "ADD_VIDEO",
        payload: data
    }
}
export const removeVideo = (data) => {
    return {
        type: "DELETE_VIDEO",
        payload: data
    }
}

export default Videos

