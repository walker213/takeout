import { CATEGORY_DATA } from "./types";
import axios from "axios";

export const fetchCategoryData = () => dispatch => {
  axios("./json/head.json").then(res => {
    dispatch({ type: CATEGORY_DATA, data: res.data });
  });
};
