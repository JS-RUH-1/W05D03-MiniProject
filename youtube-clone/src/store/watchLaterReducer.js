const initialState = {
  watchvid: [],
};

const watchLaterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_VID":
      if (state.watchvid.some((item) => item.id === payload.id)) return state;
      return { watchvid: [...state.watchvid, payload] };
    case "REM_VID":
      return {
        watchvid: state.watchvid.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default watchLaterReducer;
