let initVale = {
  arrSearch: [],
};
const searchData = (state = initVale, { type, payload }) => {
  switch (type) {
    case "addData":
      return { arrSearch: [...payload] };
    default:
      return state;
  }
};

export const makeSearch = (data) => {
  return {
    type: "addData",
    payload: data,
  };
};

export default searchData;
