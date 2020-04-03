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
          <img src="" alt="" className="order-img" />
          <div className="order-info">
            <div className="item-top">
              <p>{name}</p>
              <MyIcon type="jiantou1" />
              <span>{status}</span>
            </div>
            <div className="item-bottom">
              {foodList.slice(0, 2).map((item, index) => (
                <div className="food-item" key={index.toString()}>
                  <span>{item.name}</span>
                  <span>x{item.num}</span>
                </div>
              ))}
              <div className="food-cost">
                总计{foodList.length}个菜，实付<strong>￥{cost}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="order-btn">
          <button>评价</button>
        </div>
      </div>
    );
  }
}
