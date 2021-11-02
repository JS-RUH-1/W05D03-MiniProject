const initialState = {
  vedio: [],
};

const vedio = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add_videos":
      return { vedio: payload };

    default:
      return state;
  }
};

export default vedio;

export const Add_videos = (payload) => {
  return {
    type: "Add_videos",
    payload: payload,
  };
};
