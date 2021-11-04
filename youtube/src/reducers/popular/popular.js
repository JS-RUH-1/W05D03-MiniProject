const initialState = {
    popularVideos: [],
  };
  
  const popularV = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_POPULAR":
        return { popularVideos: payload };
      case "OPEN_VIDEO":
        return { popularVideos: payload };
      default:
        return state;
    }
  };
  
  export default popularV;
  
  export const addPopular = (videos) => {
    return {
      type: "ADD_POPULAR",
      payload: videos,
    };
  };
  
  export const openPopular = (video) => {
    return {
      type: "OPEN_VIDEO",
      payload: video,
    };
  };
  