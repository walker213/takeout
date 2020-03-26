import React, { Component } from "react";
import MyIcon from "@/components/MyIcon";
import { connect } from "react-redux";
import { fetchShopList } from "../actions/shopListAction";
import "./ContentList.scss";

/*
 * @construcotr <Caategory />
 * @description 类别
 */

@connect(state => ({
  shopList: state.shopListReducer.shopList
}))
class ContentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchShopList());
  }

  renderStar = (point = 0) => {
    let starList = [];
    const points = point.toString().split(".");
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

  renderShopTag = shopTag => {
    const pinpai = <span className="shop-tag old">品牌</span>;
    const xindao = <span className="shop-tag new">新到</span>;
    switch (shopTag) {
      case 0:
        return pinpai;
      case 1:
        return xindao;
      default:
        return null;
    }
  };

  renderPromotion = (promotion = []) => {
    const tags = { piao: "票", ling: "领", fan: "返" };
    return promotion.map((item, index) => {
      const { type, text } = item;
      return (
        <div className="promotion" key={index.toString()}>
          <span className={`promotion-tag ${type}`}>{tags[type]}</span>
          <span>{text}</span>
        </div>
      );
    });
  };

  renderList = (item, index) => {
    let {
      name,
      shopTag,
      point,
      count,
      time,
      distance,
      cost,
      isZhuanSong,
      promotion
    } = item;
    return (
      <div className="shop-item scale-1px" key={index.toString()}>
        <div className="shop-img">
          {this.renderShopTag(shopTag)}
          <img
            src={`https://via.placeholder.com/86x65/E1FFFF/808080?text=${name}`}
            alt={name}
          />
        </div>
        <div className="shop-info">
          <h4 className="name">{name}</h4>
          <div className="count info-detail">
            <div>
              <span>{this.renderStar(point)}</span>
              <span>&nbsp;&nbsp;月售{count > 999 ? "999+" : count}</span>
            </div>
            <div>
              <span className="time">{time}分钟 | </span>
              <span className="distance">{distance}m</span>
            </div>
          </div>
          <div className="convey info-detail">
            <div>
              <span className="cost">起送 ￥{cost} | </span>
              <span className="time">{time}分钟</span>
            </div>
            {isZhuanSong ? <div className="convey-tag">美团专送</div> : null}
          </div>
          {this.renderPromotion(promotion)}
        </div>
      </div>
    );
  };

  render() {
    const { shopList } = this.props;
    return (
      <div className="shop">
        <h3>
          <i />
          附近商家
          <i />
        </h3>
        <div className="shop-list">{shopList.map(this.renderList)}</div>
      </div>
    );
  }
}

export default ContentList;
