import decode from "jwt-decode";
import instance from "./instance";
import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";
import { resetErrors } from "./errors";
import Cookies from "js-cookie";
import { fetchProducts } from "./products";

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("api/v1/signup/", userData);
      const { token } = res.data;
      console.log(token);
      dispatch(resetErrors());
      dispatch(setCurrentUser(token));
      dispatch(fetchProducts());
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
      const res = await instance.post("/api/v1/login/", userData);
      const { access } = res.data;

      //console.log(res.data);
      dispatch(resetErrors());
      dispatch(setCurrentUser(access));
      dispatch(fetchProducts());
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};
export const userProfile = (user_id) => {
  return async (dispatch) => {
    try {
      if (user_id) {
        const res = await instance.get("/api/v1/" + { user_id } + "/profile/");
        const user = res.data;
        return user;
      }
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
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    Cookies.remove("token");
  }
};

const setCurrentUser = (token) => {
  setAuthToken(token);
  let user = token ? decode(token) : null;
  if (user) {
    user = userProfile(user.user_id);
    console.log(user, "FROM USER PROFILE");
  }

  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
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
