import { SET_ORDERS } from "./actionTypes";

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
        const res = await instance.post("orders/checkout/", orderData)
        const order = res.data
        console.log("Your new order is ",order)
        // dispatch(fetchOrders())
        
    } catch (error){
        console.error(error);
    }
}