import {
  ADD_ADDRESS,
  ADD_WISHLIST,
  CLOSE_ERROR,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  ERROR_LOGIN,
  ERROR_REGISTER,
  FETCH_LOGIN,
  FETCH_REGISTER,
  FETCH_UPDATE_INFO,
  FETCH_USER,
  GET_ADDRESS,
  GET_WISHLIST,
  LOGOUT,
  REGISTER,
  REMOVE_WISHLIST,
  SET_ADDRESS,
  SET_ADDRESS_TO_SHIP,
  SET_EDIT_ADDRESS_MODAL,
  SET_LOADING,
  SET_USER,
  SET_WISHLIST,
} from "constant";
import useFirestore from "hooks/useFirestore";

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
    type: REGISTER,
  };
};
export const fetchRegisterAction = (data) => {
  return {
    type: FETCH_REGISTER,
    payload: data,
  };
};

export const errorRegisterAction = (data) => {
  return {
    type: ERROR_REGISTER,
    payload: data,
  };
};

export const errorLoginAction = (data) => {
  return {
    type: ERROR_LOGIN,
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
export const updateInfoAction = (data) => {
  return {
    type: FETCH_UPDATE_INFO,
    payload: data,
  };
};
export const addAddressAction = (data) => {
  return {
    type: ADD_ADDRESS,
    payload: data,
  };
};
export const setAddressAction = (data) => {
  return {
    type: SET_ADDRESS,
    payload: data,
  };
};

export const getAddressAction = () => {
  return {
    type: GET_ADDRESS,
  };
};
export const deleteAddressAction = (data) => {
  return {
    type: DELETE_ADDRESS,
    payload: data,
  };
};
export const addWishListAction = (data) => {
  return {
    type: ADD_WISHLIST,
    payload: data,
  };
};
export const removeWishListAction = (data) => {
  return {
    type: REMOVE_WISHLIST,
    payload: data,
  };
};
export const getWishListAction = (data) => {
  return {
    type: GET_WISHLIST,
  };
};
export const setWishListAction = (data) => {
  return {
    type: SET_WISHLIST,
    payload: data,
  };
};
export const setAddressToShipAction = (data) => {
  return {
    type: SET_ADDRESS_TO_SHIP,
    payload: data,
  };
};
export const setEditModalAction = (data) => {
  return {
    type: SET_EDIT_ADDRESS_MODAL,
    payload: data,
  };
};
export const editAddress = (data) => {
  return {
    type: EDIT_ADDRESS,
    payload: data,
  };
};
export const CloseErrorLoginAction = (data) => {
  return {
    type: CLOSE_ERROR,
    payload: data,
  };
};
