import { SWITCH_TAB } from "../actions/types";
import config from "@/config";
const { bottomTabs } = config;
const initState = { currentTab: bottomTabs[0].key };

const tabReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_TAB:
      return { currentTab: action.key };
    default:
      return state;
  }
};

export default tabReducer;
