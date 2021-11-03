const initialState = {
  videos: [],
};

const Videos = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_VIDEOS":
      return { videos: payload };
    default:
      return state;
  }
};

export default Videos;

export const getVideos = () => {
  return {
    type: "GET_VIDEOS",
  };
};
