import { REGISTER } from "constant";
import { ERROR_REGISTER } from "constant";
import { ERROR_LOGIN } from "constant";
import { FETCH_REGISTER } from "constant";
import { SET_LOADING } from "constant";
import { FETCH_LOGIN, FETCH_USER, SET_USER } from "constant";

export const fetchLoginAction = (data) => {
  return {
    type: FETCH_LOGIN,
    payload: data,
  };
};
export const setLoadingAction = (data) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
export const setUserAction = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const fetchUserAction = (data) => {
  return {
    type: FETCH_USER,
    payload: data,
  };
};
export const registerAction = () => {
  return {
    type: REGISTER
  }
}
export const fetchRegisterAction = (data) => {
  return {
    type: FETCH_REGISTER,
    payload: data
  }
}

export const errorRegisterAction = (data) => {
  return {
    type: ERROR_REGISTER,
    payload: data
  }
} 

export const errorLoginAction = (data) => {
  return {
    type: ERROR_LOGIN,
    payload: data
  }
} 