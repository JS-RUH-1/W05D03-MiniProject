const initialState = {
    watchLater: [],
  };

  const watchLaterReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case 'WATCH_LATER_ADD':
            return { watchLater: [...state.watchLater, payload] };
        case 'WATCH_LATER_REMOVE':
            return { watchLater: state.watchLater.filter(item => item.id !== payload) };
        default:
            return state;
    }
  };

  export default watchLaterReducer;



export const watchLater = {
    add: (payload) => ({
        type: "WATCH_LATER_ADD", payload
    }),
    remove: (payload) => ({
        type: "WATCH_LATER_REMOVE", payload
    })
}