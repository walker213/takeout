import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { fetchOrderData } from "../actions/orderAction";
import "./index.scss";

/*
 * @construcotr <Order />
 * @description 订单tab
 */

@connect(state => ({
  list: state.orderReducer.list,
  isLoading: state.commonReducer.loading
}))
class Order extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrderData());
  }

  renderList = () => {
    const { list } = this.props;
    return list.map((item, index) => (
      <ListItem key={index.toString()} {...item} />
    ));
  };

  render() {
    return (
      <div className="order">
        <div className="order-header">订单</div>
        <div className="order-list">{this.renderList()}</div>
      </div>
    );
  }
}

export default Order;
