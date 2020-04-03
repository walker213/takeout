import React, { Component } from "react";
import "./index.scss";

/*
 * @construcotr <Order />
 * @description 订单tab
 */

// @connect(state => ({
//   shopList: state.shopListReducer.shopList,
//   isLoading: state.commonReducer.loading
// }))
class Order extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="order">
        <div className="order-header">订单</div>
      </div>
    );
  }
}

export default Order;
