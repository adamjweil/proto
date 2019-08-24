import setAuthToken from "./../utils/setAuthToken";
import api from "../apis/api";
import {
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_SUCCESS
} from "./types";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// Load a user
export const loadUser = () => async dispatch => {};

//Register user
export const register = formValues => async dispatch => {
  const res = await api.post("/user", formValues);
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: formValues
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: formValues
    });
  }
  console.log(res);
};

// Login a user
export const login = (email, password) => async dispatch => {};
