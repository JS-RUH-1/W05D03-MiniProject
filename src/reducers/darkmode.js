const initialState = {
    dark: false,
  };

  const darkReducer = (state = initialState, {type, payload}) => {

    switch (type) {
      case 'DARK':
        return { dark: !state.dark };
      default:
        return state;
    }
  };

  export default darkReducer;



export function dark(){
    return {type: "DARK"};
}