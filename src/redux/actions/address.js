import {
    SET_USER_ADDRESSES, 
    UPDATE_ADDRESS, 
    DELETE_ADDRESS, 
    ADD_ADDRESS,
    SET_ERRORS
    } from "./actionTypes"
import { resetErrors } from "./errors";
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
  
  export const addAddress = (newAddress) => async (dispatch) => {
    try {
      const res = await instance.post("address/add/", newAddress);
      const address = res.data;
      dispatch(resetErrors());
      dispatch({
        type: ADD_ADDRESS,
        payload: address,
      });
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };