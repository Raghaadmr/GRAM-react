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