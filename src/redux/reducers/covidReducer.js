const initialState = {
  death: 0,
  positive: 0,
  recovery: 0,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEATH":
      return {
        ...state,
        death: action.payload.number,
      };
    case "SET_POSITIVE":
      return {
        ...state,
        positive: action.payload.number,
      };
    case "SET_RECOVERY":
      return {
        ...state,
        recovery: action.payload.number,
      };

    default:
      return state;
  }
};

export default covidReducer;
