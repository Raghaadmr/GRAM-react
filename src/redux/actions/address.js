import {
    SET_USER_ADDRESSES, 
    UPDATE_ADDRESS, 
    DELETE_ADDRESS, 
    ADD_ADDRESS 
    } from "./actionTypes"
import instance from "./instance"

export const fetchAddresses = () => async (dispatch) => {
    try {
      const res = await instance.get("address/list/");
      const addresses = res.data;
      dispatch({ type: SET_USER_ADDRESSES, payload: addresses });
    } catch (err) {
      console.error(err);
    }
  };
  
