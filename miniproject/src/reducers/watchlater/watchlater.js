const initialState = {
  watchlater: [],
};

const watchlater = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD-WATCHLATER":
      return { watchlater: [...state.watchlater, payload] };
    case "DELETE-WATCHLATER":
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
    type: "ADD-WATCHLATER",
    payload: payload,
  };
};

export const deleteWatchLater = (payload) => {
  return {
    type: "DELETE-WATCHLATER",
    payload: payload,
  };
};