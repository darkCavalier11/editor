export const initialState = {
  lang: "",
  text: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
};

export default reducer;
