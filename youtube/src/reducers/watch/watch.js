const initialState = {
  watch: [],
};

const watch = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add_Watch":
      return { watch: state.watch.concat(...payload) };

    default:
      return state;
  }
};

export default watch;

export const addWatch = (payload) => {
  return {
    type: "Add_Watch",
    payload: payload,
  };
};
