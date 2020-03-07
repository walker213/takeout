import { ADD_TODO } from "../actions/types";

const initState = { num: 0 };

const tabReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { num: state.num + action.num };
      break;
    default:
      return state;
      break;
  }
};

export default tabReducer;
