let initVale = {
  array: [],
};
const Videos = (state = initVale, { type, payload }) => {
  switch (type) {
    case "addVideos":
      return { array: [...payload] };
    default:
      return state;
  }
};

export const addVideos = (arrOfVideos) => {
  return {
    type: "addVideos",
    payload: arrOfVideos,
  };
};
export default Videos;
