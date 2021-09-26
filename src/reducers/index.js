const initialState = {
  data: null,
};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_REGION":
      return {
        ...state,
        data: action.data,
      };
    case "Fetch_Error":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default pokeReducer;
