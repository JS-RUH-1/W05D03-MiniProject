const initialState = {
  watch: [],
};

const watch = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_WATCH":
      return {
        watch: [...state.watch, payload],
      };
    case "REMOVE_WATCH":
      return {
        watch: state.watch.filter((e) => {
          return e.id !== payload.id;
        }),
      };

    default:
      return state;
  }
};

export default watch;

export const addWatch = (payload) => {
  return {
    type: "ADD_WATCH",
    payload: payload,
  };
};

export const removeWatch = (payload) => {
  return {
    type: "REMOVE_WATCH",
    payload: payload,
  };
};
