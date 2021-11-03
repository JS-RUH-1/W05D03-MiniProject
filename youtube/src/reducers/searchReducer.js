
const initialState = {
    searchWord :'',
    searchArray : []
}


const searches = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case "saveWord":
        return { searchWord: payload };

        case "saveArray":
        return { searchArray: payload };
    
      default:
        return state;
    }
  };

  export const saveWord = (word) => {
    return {
      type: "saveWord",
      payload: word,
    };
  };

  export const saveArray = (word) => {
    return {
      type: "saveArray",
      payload: word,
    };
  };
  
  export default searches;
  
