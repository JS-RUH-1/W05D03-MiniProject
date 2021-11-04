const initialState = {
  videos: [],
  };
  const youtube =(state=initialState,{type , payload})=>{
    switch (type) {
      case "ADD_VIDEOS":
        return { videos: payload };
      case "ADD_VIDEO":
        return { videos: [...state.videos, payload] };
      case "REMOVE_VIDEO":
        return {
          videos: state.videos.filter((element) => {
            return element.id !== payload.id;
          }),
        };
      default:
        return state;
    }
  };
  export default youtube;

  export const addVideos = (videos) => {
    return {
      type: "ADD_VIDEOS",
      payload: videos,
    };
  };
  
  export const addVideo = (videos) => {
    return {
      type: "ADD_VIDEO",
      payload: videos,
    };
  };
  export const removeVideo = (video) => {
    return {
      type: "REMOVE_VIDEO",
      payload: video,
    };
  };