import { ORDER_DATA } from "../actions/types";
const initState = { list: [] };

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_DATA:
      return { list: [...state.list, ...action.data] };
    default:
      return state;
  }
};

export default orderReducer;
