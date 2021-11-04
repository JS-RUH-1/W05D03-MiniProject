const initialState = {
  watchlater: [],
}

const watchlater = (state = initialState, {type, payload}) => {
    switch (type) {
        case "WATCH_LIST": 
            return {watchlater:[...state.watchlater, payload]};
    
        default:
            return state;
    }
}

export default watchlater

export const addWatchlater = (watchlater) => {
    return{
        type:"WATCH_LIST",
        payload: watchlater
    }
}
