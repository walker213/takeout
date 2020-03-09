import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./Main";
import "../../static/common.scss";

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
