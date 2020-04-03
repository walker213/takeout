import { combineReducers } from "redux";
import { LOADING } from "../actions/types";
import tabReducer from "./tabReducer";
import categoryReducer from "./categoryReducer";
import shopListReducer from "./shopListReducer";
import orderReducer from "./orderReducer";

const commonInitState = {
  loading: false
};
const commonReducer = (state = commonInitState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

const reducers = combineReducers({
  commonReducer,
  tabReducer,
  categoryReducer,
  shopListReducer,
  orderReducer
});

export default reducers;
