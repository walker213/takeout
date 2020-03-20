import { CATEGORY_DATA } from "../actions/types";
const initState = { categoryData: [] };

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CATEGORY_DATA:
      return { categoryData: action.data };
    default:
      return state;
  }
};

export default categoryReducer;
