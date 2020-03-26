import { SHOP_LIST } from "../actions/types";
const initState = { shopList: [] };

const shopListReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOP_LIST:
      return { shopList: action.data };
    default:
      return state;
  }
};

export default shopListReducer;
