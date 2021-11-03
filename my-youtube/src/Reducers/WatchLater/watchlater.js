const initialState = {
  watchlater: [],
};

const watchlater = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD__WATCH__LATER":
      return { watchlater: [...state.watchlater, payload] };
    case "DELETE__WATCH__LATER":
      return {
        watchlater: state.watchlater.filter((ele) => {
          return ele.id !== payload.id;
        }),
      };
    default:
      return state;
  }
};

export default watchlater;

export const addWatchLater = (payload) => {
  return {
    type: "ADD__WATCH__LATER",
    payload: payload,
  };
};

export const deleteWatchLater = (payload) => {
  return {
    type: "DELETE__WATCH__LATER",
    payload: payload,
  };
};
