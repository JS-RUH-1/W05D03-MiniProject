const initialState = {
    details: {},
  };
  
  const details = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_DETAILS":
        return { details: payload };
      default:
        return state;
    }
  };
  
  export default details;
  
  export const addDetails = (payload) => {
    return {
      type: "ADD_DETAILS",
      payload: payload,
    };
  };
 