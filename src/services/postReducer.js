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

export const userInit = {
  user: { id: [], name: [] },
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "changeUsers":
      return {
        ...state,
        user: {
          id: [...state.user.id, action.userId],
          id: [...state.user.name, action.userName],
        },
      };
    default:
      return state;
  }
};
