import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

/* 检测rootreducer更改，然后热更新 */
if (module.hot) {
  module.hot.accept("./reducers/index.js", () => {
    const nextRootReducer = require("./reducers/index.js").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
