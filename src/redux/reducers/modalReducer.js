const initialState = {
  status: false,
  form: "login",
};

const modalReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_MODAL") {
    return {
      status: !state.status,
      form: action.payload.button,
    };
  } else if (action.type === "CHANGE_TO_REGISTER") {
    return {
      ...state,
      form: "register",
    };
  } else if (action.type === "CHANGE_TO_LOGIN") {
    return {
      ...state,
      form: "login",
    };
  }
  return state;
};

export default modalReducer;
