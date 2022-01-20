export const init = {
  postData: { userId: "", id: "", title: "", body: "" },
  users: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeUsers":
      return { ...state, users: action.users };
    case "isUpdate":
      return { ...state, postData: action.payLoad };
    case "setInputValue":
      return {
        ...state,
        postData: { ...state.postData, [action.propName]: action.propValue },
      };

    default:
      return state;
  }
};
