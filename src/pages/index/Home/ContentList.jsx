import React, { Component } from "react";
// import MyIcon from "@/components/MyIcon";
// import { connect } from "react-redux";
// import { fetchCategoryData } from "../actions/categoryAction";
import "./ContentList.scss";

/*
 * @construcotr <Caategory />
 * @description 类别
 */

// @connect(state => ({
//   categoryData: state.categoryReducer.categoryData
// }))
class Category extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchCategoryData());
  // }

  renderList() {
    return (
      <div className="shop-item scale-1px">
        <div className="shop-img">
          <span className="shop-tag">xx</span>
          <img src="https://via.placeholder.com/86x65/FFFF00/808080" alt="" />
        </div>
        <div className="shop-info">
          <h4 className="name">xx</h4>
          <div className="count info-detail">
            <div>
              <span>star </span>
              <span>月售</span>
            </div>
            <div>
              <span className="time">xx分钟 | </span>
              <span className="distance">xxm</span>
            </div>
          </div>
          <div className="convey info-detail">
            <div>
              <span className="cost">起送 ￥30 | </span>
              <span className="time">xx</span>
            </div>
            <div className="convey-tag">美团专送</div>
          </div>
          <div className="promotion">
            <span>xx</span>
            <span>xx</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="shop">
        <h3>
          <i />
          附近商家
          <i />
        </h3>
        <div className="shop-list">{this.renderList()}</div>
      </div>
    );
  }
}

export default Category;
