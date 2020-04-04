import React, { Component } from "react";
import MyIcon from "@/components/MyIcon";
import "./ListItem.scss";

/*
 * @construcotr <ListItem />
 * @description 订单列表单个组件
 */

export default class ListItem extends Component {
  render() {
    const { name, status, foodList, cost } = this.props;
    return (
      <div className="order-item">
        <div className="order-detail">
          <img
            src={`https://via.placeholder.com/40x40/E1FFFF/808080?text=${name}`}
            alt={name}
            className="order-img"
          />
          <div className="order-info">
            <div className="item-top">
              <p className="one-line">{name}</p>
              <MyIcon type="jiantou1" />
              <span>{status}</span>
            </div>
            <div className="item-bottom">
              {foodList.slice(0, 2).map((item, index) => (
                <div className="fo od-item" key={index.toString()}>
                  <span>{item.name}</span>
                  <span>x{item.num}</span>
                </div>
              ))}
              <div className="food-cost">
                <span>...</span>总计{foodList.length}个菜，实付
                <strong>￥{cost}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="order-btn clearfix">
          <button>评价</button>
        </div>
      </div>
    );
  }
}
