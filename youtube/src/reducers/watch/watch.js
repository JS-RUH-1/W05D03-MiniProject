const initialState = {
  watch: [],
};

const watch = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add_Watch":
      return { watch: state.watch.concat(...payload) };

    case "REMOVE_Watch":
      return {
        watch: state.watch.filter((element) => {
          return element.id !== payload.id;
        }),
      };

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

export const removeWatch = (watch) => {
  return {
    type: "REMOVE_Watch",
    payload: watch,
  };
};
