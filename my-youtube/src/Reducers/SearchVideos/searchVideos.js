const initialState = {
    searchVideos: [],
  };
  
  const searchVideos = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_SEARCH_VIDEOS":
        return { searchVideos: payload };
      default:
        return state;
    }
  };
  
  export default searchVideos;
  
  export const addSearchVideos = (payload) => {
    return {
      type: "ADD_SEARCH_VIDEOS",
      payload: payload,
    };
  };
  