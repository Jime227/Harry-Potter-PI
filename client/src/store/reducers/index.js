const initialState = {
  all: [],
  filterpj: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        all: action.payload,
        filterpj: action.payload,
      };
    case "FILTER_PJ":
      const filter = state.filterpj.filter(
        (ele) => ele.ancestry === action.payload
      );
      return {
        ...state,
        all: filter,
      };
    default:
      return state;
  }
}

export default reducers;
