const initialState = {
  video: [],
};

const video = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add_videos":
      return { video: payload };

    default:
      return state;
  }
};

export default video;

export const addVideos = (payload) => {
  return {
    type: "Add_videos",
    payload: payload,
  };
};
