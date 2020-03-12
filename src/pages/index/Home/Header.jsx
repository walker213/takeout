import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./Header.scss";

/*
 * @construcotr <Header />
 * @description 顶部banner
 */

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <SearchBar />
      </div>
    );
  }
}
