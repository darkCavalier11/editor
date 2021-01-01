export const initialState = {
  lang: "",
  text: "",
  key: "",
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
    case "SET_KEY":
      return {
        ...state,
        key: action.key,
      };
    default:
      return state;
  }
};

export default reducer;
