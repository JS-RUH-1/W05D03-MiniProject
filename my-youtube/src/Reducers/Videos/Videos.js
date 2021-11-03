const initialState = {
  videos: [],
};

const videos = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_VIDEOS":
      return { videos: [...payload] };
    default:
      return state;
  }
};

export default videos;

export const addVideos = (payload) => {
  return {
    type: "ADD_VIDEOS",
    payload: payload,
  };
};
