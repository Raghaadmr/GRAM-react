import { SET_ORDERS, SET_ERRORS } from "./actionTypes";

import instance from "./instance";
export const fetchOrders = () => async dispatch => {
    try {
        const res = await instance.get("orders/");
        const orders = res.data;
        dispatch({
            type: SET_ORDERS,
            payload: orders,
        });
    } catch (error) {
        console.error(error);
    }
};

export const checkout = (orderData) => async dispatch => {
    try{
        const res = await instance.post("order/checkout/", orderData)
        const order = res.data
        console.log("Your new order is ",order)
        dispatch(fetchOrders())
        
    } catch (error){
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data,
          });
    }
}