const defaultstate = {
    watchLater: [],
  };

  const WatchLater = (state = defaultstate, {type, payload}) => {

    switch (type) {
        case 'Add':
            return { watchLater: [...state.watchLater, payload] };
        case 'remove':
            return { watchLater: state.watchLater.filter(item => item.id !== payload) };
        default:
            return state;
    }
  };

  export default WatchLater;

  export const add = (payload) => {
    return {
      type: "Add",
      payload: payload,
    };
  };
  export const remove = (payload) => {
    return {
      type: "remove",
      payload: payload,
    };
  };
