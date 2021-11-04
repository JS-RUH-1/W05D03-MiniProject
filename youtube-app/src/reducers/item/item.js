const initialState = {
  item: [],
};

const item = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      return {
        item: [...state.item, payload],
      };

    default:
      return state;
  }
};

export default item;

export const addItem = (payload) => {
  return {
    type: "ADD_ITEM",
    payload: payload,
  };
};

//   export const addItem = (payload) => {
//     return {
//       type: "ADD_ITEM",
//       payload: payload,
//     };
//   };
