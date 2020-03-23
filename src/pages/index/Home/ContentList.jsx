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

  render() {
    return (
      <div className="shop">
        <h3>
          <i />
          附近商家
          <i />
        </h3>
      </div>
    );
  }
}

export default Category;
