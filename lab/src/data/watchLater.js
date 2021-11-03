let initVale = {
  array: [],
};
const WatchLater = (state = initVale, { type, payload }) => {
  switch (type) {
    case "addToList": {
      if (!state.array.includes(payload)) {
        return {
          array: [...state.array, payload],
        };
      } else return state;
    }
    case "removeFromList": {
      return {
        array: state.array.filter((el) => {
          return el.id.videoId !== payload.id.videoId;
        }),
      };
    }
    default:
      return state;
  }
};

export const addToList = (element) => {
  return {
    type: "addToList",
    payload: element,
  };
};
export const removeFromList = (element) => {
  return {
    type: "removeFromList",
    payload: element,
  };
};
export default WatchLater;
