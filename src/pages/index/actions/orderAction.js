import { ORDER_DATA } from "./types";
import axios from "axios";

export const fetchOrderData = () => dispatch => {
  axios("./json/order.json").then(res => {
    dispatch({ type: ORDER_DATA, data: res.data });
  });
};
