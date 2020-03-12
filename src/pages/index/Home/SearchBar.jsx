import React, { Component } from "react";
import "./SearchBar.scss";
import MyIcon from "@/components/MyIcon";

/*
 * @construcotr <SearchBar />
 * @description 顶部searchBar
 */

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-location">
          <MyIcon type="location" />
          <span className="location-text">佛山市</span>
          <MyIcon type="jiantou1" />
        </div>
        <div className="search-btn">
          <MyIcon type="sousuo" />
          <span>jichi</span>
        </div>
      </div>
    );
  }
}
