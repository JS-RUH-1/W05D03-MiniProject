const initialState = {
    watchVideos: [],
  };
  
  const watchLater = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_VIDEO":
        return { watchVideos: [...state.watchVideos, payload] };
        case "REMOVE_VIDEO":
        return {
            watchVideos: state.watchVideos.filter((element) => {
            return element.id !== payload.id;
          }),
        };
      default:
        return state;
    }
  };
  
  export default watchLater;
  
  export const addVideo = (videos) => {
    return {
      type: "ADD_VIDEO",
      payload: videos,
    };
  };
  
  export const removeVideo = (videos) => {
    return {
      type: "REMOVE_VIDEO",
      payload: videos,
    };
  };
  