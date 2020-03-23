import React, { Component } from "react";
import MyIcon from "@/components/MyIcon";
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

  renderStar = point => {
    let starList = [];
    const points = point.split(".");
    let fullStarNum = Number(points[0]);
    let halfStarNum = Number(points[1]) >= 4 ? 1 : 0;
    let noStarNum = 5 - fullStarNum - halfStarNum;
    for (let i = 0; i < fullStarNum; i++) {
      starList.push("starFull");
    }
    if (halfStarNum) starList.push("starHalf");
    for (let i = 0; i < noStarNum; i++) {
      starList.push("starNo");
    }
    const icon = starList.map((item, index) => (
      <MyIcon type={item} key={index.toString()} />
    ));
    return icon;
  };

  renderList() {
    let num = 1000;
    return (
      <div className="shop-item scale-1px">
        <div className="shop-img">
          {/* <span className="shop-tag old">品牌</span> */}
          <span className="shop-tag new">新到</span>
          <img src="https://via.placeholder.com/86x65/E1FFFF/808080" alt="" />
        </div>
        <div className="shop-info">
          <h4 className="name">xx</h4>
          <div className="count info-detail">
            <div>
              <span>{this.renderStar("4.5")}</span>
              <span>&nbsp;&nbsp;月售{num > 999 ? "999+" : num}</span>
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
            <span className="promotion-tag piao">票</span>
            <span>xx</span>
          </div>
          <div className="promotion">
            <span className="promotion-tag ling">领</span>
            <span>xx</span>
          </div>
          <div className="promotion">
            <span className="promotion-tag fan">返</span>
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
