import React, { Component } from "react";
import Header from "./Header";
import Category from "./Category";
import ContentList from "./ContentList";

/*
 * @construcotr <Home />
 * @description 首页tab代码
 */

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Category />
        <ContentList />
      </div>
    );
  }
}
