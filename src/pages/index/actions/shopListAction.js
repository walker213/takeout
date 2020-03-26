import { SHOP_LIST } from "./types";
import axios from "axios";

export const fetchShopList = () => dispatch => {
  axios("./json/shopList.json").then(res => {
    dispatch({ type: SHOP_LIST, data: res.data });
  });
};
