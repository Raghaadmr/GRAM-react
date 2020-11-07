import {
    SET_USER_ADDRESSES, 
    UPDATE_ADDRESS, 
    DELETE_ADDRESS, 
    ADD_ADDRESS,
    SET_ERRORS,
    SET_COUNTRIES
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
  
  export const addAddress = (newAddress, history) => async (dispatch) => {
    try {
      const res = await instance.post("address/add/", newAddress);
      const address = res.data;
      dispatch(resetErrors());
      dispatch({
        type: ADD_ADDRESS,
        payload: address,
      });
      history.push("/addresses")
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const deleteAddress = (addressID, history) => async (dispatch) => {
    try {
      await instance.delete(`address/${addressID}/delete/`);
      dispatch(resetErrors());
      // dispatch(fetchAddresses);
      dispatch({
        type: DELETE_ADDRESS,
        payload: addressID,
      });
      history.push("/addresses")
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const fetchCountries = () => async (dispatch) => {
    try {
      const res = await instance.get("country/list/");
      const countries = res.data;
      dispatch({ type: SET_COUNTRIES, payload: countries });
    } catch (err) {
      console.error(err);
    }
  };