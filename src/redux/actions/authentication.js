import decode from "jwt-decode";
import instance from "./instance";
import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";
import { resetErrors } from "./errors";
import Cookies from "js-cookie";
import { fetchAddresses, fetchOrders } from "../actions";

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup/", userData);
      const { token } = res.data;
      dispatch(resetErrors());
      dispatch(setCurrentUser(token));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/login/", userData);
      const { access } = res.data;
      console.log(access);
      dispatch(resetErrors());
      dispatch(setCurrentUser(access));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

const setAuthToken = (token) => {
  if (token) {
    Cookies.set("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    Cookies.remove("token");
  }
};

const setCurrentUser = (token) => async dispatch => {
  setAuthToken(token);
  const user = token ? decode(token) : null;
  dispatch({ 
    type: SET_CURRENT_USER,
    payload: user,
  });
  dispatch(fetchAddresses());
  dispatch(fetchOrders());
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  const token = Cookies.get("token");
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    const user = decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return setCurrentUser();
};
