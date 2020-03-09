import React, { Component } from "react";
import { connect } from "react-redux";

/*
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>bottombar</div>;
  }
  renderItems() {
    let tabs = ["首页", "订单", "我的"];
    return tabs.map((item, index) => (
      <div key={item} className="btn-item">
        <div className="tab-icon"></div>
        <div className="btn-name">{item}</div>
      </div>
    ));
  }

  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>;
  }
}
