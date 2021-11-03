import { LIGHT_MODE, DARK_MODE } from "./styleMode";

let initVale = {
  isDarkMode: false,
  colorsObject: DARK_MODE,
};
const ui = (state = initVale, { type, payload }) => {
  switch (type) {
    case "changeMode":
      return {
        isDarkMode: !state.isDarkMode,
        colorsObject: state.colorsObject === DARK_MODE ? LIGHT_MODE : DARK_MODE,
      };

    default:
      return state;
  }
};

export const changeMode = () => {
  return {
    type: "changeMode",
    payload: "d",
  };
};
export default ui;
