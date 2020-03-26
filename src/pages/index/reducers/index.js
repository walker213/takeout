import { combineReducers } from "redux";
import tabReducer from "./tabReducer";
import categoryReducer from "./categoryReducer";
import shopListReducer from "./shopListReducer";

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  shopListReducer
});

export default reducers;
