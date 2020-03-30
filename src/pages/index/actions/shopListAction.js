import { SHOP_LIST, LOADING } from "./types";
import axios from "axios";

export const fetchShopList = () => dispatch => {
  dispatch({ type: LOADING, loading: true });
  axios("./json/shopList.json").then(res => {
    dispatch({ type: SHOP_LIST, data: res.data });
    dispatch({ type: LOADING, loading: false });
  });
};
