import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

/* 检测rootreducer更改，然后热更新 */
if (module.hot) {
  module.hot.accept("./reducers/index.js", () => {
    const nextRootReducer = require("./reducers/index.js").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
