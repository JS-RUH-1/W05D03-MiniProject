const initialState = {
  id: [],
};

const id = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ID":
      return {
        id: payload,
      };
    default:
      return state;
  }
};

export default id;

export const addID = (payload) => {
  return {
    type: "ADD_ID",
    payload: payload,
  };
};


