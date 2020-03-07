import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/tabActions";

class Main extends Component {
  render() {
    const { num, dispatch } = this.props;
    return <div onClick={() => dispatch(addTodo(10))}>{num}</div>;
  }
}

export default connect(state => ({
  num: state.tabReducer.num
}))(Main);
