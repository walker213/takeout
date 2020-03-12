import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import BottomBar from "../BottomBar";

class Main extends Component {
  render() {
    return (
      <div>
        <BottomBar />
      </div>
    );
  }
}

export default hot(Main);
