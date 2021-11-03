// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/{videoId}"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;


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
 