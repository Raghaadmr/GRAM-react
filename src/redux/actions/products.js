import { SET_PRODUCTS } from "./actionTypes";

import instance from "./instance";
export const fetchProducts = () => async dispatch => {
  try {
    const res = await instance.get("/products/");
    const products = res.data;
   console.log(products)
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error(error);
  }
};