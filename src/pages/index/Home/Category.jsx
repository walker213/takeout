import React, { Component } from "react";
import MyIcon from "@/components/MyIcon";
import { connect } from "react-redux";
import { fetchCategoryData } from "../actions/categoryAction";
import "./Category.scss";

/*
 * @construcotr <Caategory />
 * @description 类别
 */

@connect(state => ({
  categoryData: state.categoryReducer.categoryData
}))
class Category extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCategoryData());
  }

  render() {
    return (
      <div className="category">
        {this.props.categoryData.map(item => (
          <div className="category-item" key={item.name}>
            <div
              className="category-icon"
              style={{ backgroundColor: item.color }}
            >
              <MyIcon type={item.icon} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
