import React, { Component } from "react";
import { connect } from "react-redux";
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

  render() {
    return (
      <div className="order">
        <div className="order-header">订单</div>
      </div>
    );
  }
}

export default Order;
