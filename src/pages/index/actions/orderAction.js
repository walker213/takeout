import { ORDER_DATA, LOADING } from "./types";
import axios from "axios";

export const fetchOrderData = page => dispatch => {
  dispatch({ type: LOADING, loading: true });
  axios("./json/order.json").then(res => {
    console.log(res);
    dispatch({ type: ORDER_DATA, data: res.data, page });
    dispatch({ type: LOADING, loading: false });
  });
};
