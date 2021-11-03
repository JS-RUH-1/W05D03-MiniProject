let initVale = {
  temp: {},
};
const temp = (state = initVale, { type, payload }) => {
  switch (type) {
    case "addTemp":
      return { temp: payload };
    default:
      return state;
  }
};

export const addTemp = (element) => {
  return {
    type: "addTemp",
    payload: element,
  };
};
export default temp;
