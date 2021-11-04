const initialState = {
    watchvid: [],
  };
  
  const watchLaterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_VID":
        // if (state.watchvid.some((e) => e.id === payload.id)) return state;
        return { watchvid: [...state.watchvid, payload] };
      
        case "REM_VID":
        return {
          watchvid: state.watchvid.filter((e) => e.id !== payload.id),
        };
  
      default:
        return state;
    }
  };

  export const addvidWatchlater =(payload)=> {
    return{
        type:"ADD_VID",
        payload,
    };}
    
    export const removevidWatchlater =(payload)=> {
        return{
            type:"REM_VID",
            payload,
        };
    }
  
  export default watchLaterReducer;

  