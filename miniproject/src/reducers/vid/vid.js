const initialState = {
    vid: [],
  };
  
  const vid = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_VIDS":
        return { vid: payload };
      default:
        return state;
    }
  };
  
  export default vid;
//   ----------------------------------------------------

  export const addVids = (vid) => {
    return {
      type: "ADD_VIDS",
      payload: vid,
    };
  };
  


  