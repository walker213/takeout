import React, { Component } from "react";
import { connect } from "react-redux";
import MyIcon from "@/components/MyIcon";
import config from "@/config";
import "./index.scss";
import { switchTab } from "../actions/tabAction";

const { bottomTabs } = config;

/*
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

@connect(state => ({
  currentTab: state.tabReducer.currentTab
}))
class BottomBar extends Component {
  constructor(props) {
    super(props);
  }
  changeTab = key => {
    const { currentTab, dispatch } = this.props;
    if (key === currentTab) return;
    dispatch(switchTab(key));
  };
  renderItems() {
    return bottomTabs.map(item => {
      const { currentTab } = this.props;
      const { key, name, icon } = item;
      const cn = key === currentTab ? "tab-item active" : "tab-item";
      return (
        <div key={key} className={cn} onClick={() => this.changeTab(key)}>
          <div className="tab-icon">
            <MyIcon type={icon} />
          </div>
          <div className="tab-name">{name}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>;
  }
}

export default BottomBar;
