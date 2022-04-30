import {
  SET_ADD_ADDRESS_MODAL,
  SET_EDIT_ADDRESS_MODAL,
  SET_MODAL_ADDRESS,
} from "constant";

const { SET_MODAL_PRODUCT } = require("constant");

const init = {
  currentAddress: JSON.parse(localStorage.getItem("address_list")) || [],
};

const modalReducer = (state = init, action) => {
  switch (action.type) {
    case SET_MODAL_PRODUCT:
      return {
        ...state,
        currentProduct: {
          ...action.payload,
        },
      };
    case SET_MODAL_ADDRESS:
      return {
        ...state,
        open: action.payload,
        currentAddress: JSON.parse(localStorage.getItem("address_list")),
      };
    case SET_ADD_ADDRESS_MODAL:
      return {
        ...state,
        open: action.payload,
      };
    case SET_EDIT_ADDRESS_MODAL:
      return {
        ...state,
        openEditModal: action.payload.open,
        data: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default modalReducer;
