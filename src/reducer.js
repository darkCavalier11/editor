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
    case "CHANGE_TEXT_CONTENT":
      return {
        ...state,
        text: action.code,
      };
    default:
      return state;
  }
};

export default reducer;
