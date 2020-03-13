import React, { Component } from "react";
import MyIcon from "@/components/MyIcon";
import config from "@/config";
import "./Category.scss";

const { category } = config

/*
 * @construcotr <Caategory />
 * @description 类别
 */

export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">
        {category.map(item => (
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
