import { SET_STATUS_CART } from "constant";
import { ADD_WISHLIST } from "constant";
import { SET_CART } from "constant";
import {
  CLEAR_CART,
  DECREASE_CART,
  GET_CART,
  INCREASE_CART,
  REMOVE_CART,
} from "constant";
const listCart = JSON.parse(localStorage.getItem("list_cart")) || [];
const num = JSON.parse(localStorage.getItem("num")) || 0;
const amount = JSON.parse(localStorage.getItem("total_amount")) || 0;
let initialValue = {
  listCart: listCart,
  num: num,
  amount: amount,
  status: {
    type: "",
    content: "",
  },
};
const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_CART:
      let { listCart, num, amount } = state;
      action.payload.number = action.payload.number || 1;
      const findIndex = listCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex !== -1) {
        listCart[findIndex].number += action.payload.number;
        listCart[findIndex].real_price =
          listCart[findIndex].number * listCart[findIndex].defaultPrice;
        amount = action.payload.real_price * listCart[findIndex].number;
      } else {
        listCart.push(action.payload);
        amount += action.payload.real_price * action.payload.number;
        action.payload.real_price *= action.payload.number;
      }
      localStorage.setItem("list_cart", JSON.stringify(listCart));
      localStorage.setItem("total_amount", JSON.stringify(amount));
      localStorage.setItem("num", JSON.stringify(num + 1));
      return {
        ...state,
        amount,
        listCart,
        num: num + action.payload.number,
        status: {
          type: "success",
          content: "Thêm sản phảm thành công",
        },
      };
    case INCREASE_CART: {
      let { listCart, num, amount } = state;
      num += 1;
      const findIndex = listCart.findIndex(
        (item) => item.id === action.payload.id
      );
      listCart[findIndex].number += 1;
      listCart[findIndex].real_price =
        action.payload.defaultPrice * listCart[findIndex].number;
      amount += action.payload.defaultPrice;
      localStorage.setItem("list_cart", JSON.stringify(listCart));
      localStorage.setItem("total_amount", JSON.stringify(amount));
      localStorage.setItem("num", JSON.stringify(num));
      return {
        ...state,
        listCart,
        amount,
        num,
        status: {
          type: "success",
          content: "Bạn vừa tăng 1 sản phẩm",
        },
      };
    }
    case DECREASE_CART: {
      let { listCart, num, amount } = state;
      const findIndex = listCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (listCart[findIndex].number === 1) {
        amount -= action.payload.defaultPrice;
        listCart.splice(findIndex, 1);
      } else {
        listCart[findIndex].number -= 1;
        listCart[findIndex].real_price -= action.payload.defaultPrice;
        amount -= action.payload.defaultPrice;
      }
      localStorage.setItem("list_cart", JSON.stringify(listCart));
      localStorage.setItem("total_amount", JSON.stringify(amount));
      localStorage.setItem("num", JSON.stringify(num - 1));
      return {
        ...state,
        listCart,
        amount,
        num: num - 1 >= 0 ? num - 1 : 0,
        status: {
          type: "warning",
          content: "Bạn vừa gỉảm 1 sản phẩm",
        },
      };
    }
    case REMOVE_CART: {
      let { listCart, num, amount } = state;
      const findIndex = listCart.findIndex(
        (item) => item.id === action.payload.id
      );
      amount -= listCart[findIndex].number * listCart[findIndex].defaultPrice;
      num = num - listCart[findIndex].number;
      listCart.splice(findIndex, 1);
      localStorage.setItem("list_cart", JSON.stringify(listCart));
      localStorage.setItem("total_amount", JSON.stringify(amount));
      localStorage.setItem("num", JSON.stringify(num));

      return {
        ...state,
        listCart,
        amount,
        num,
        status: {
          type: "warning",
          content: "Bạn vừa xóa sản phẩm",
        },
      };
    }
    case CLEAR_CART: {
      let { listCart, num, amount } = state;
      listCart = [];
      num = 0;
      amount = 0;
      localStorage.setItem("list_cart", JSON.stringify(listCart));
      localStorage.setItem("total_amount", JSON.stringify(amount));
      localStorage.setItem("num", JSON.stringify(num));
      return {
        ...state,
        listCart,
        amount,
        num,
        status: {
          type: "warning",
          content: "Bạn vừa xóa tất cả sản phẩm",
        },
      };
    }
    case SET_CART: {
      const listCart = JSON.parse(localStorage.getItem("list_cart"));
      const num = JSON.parse(localStorage.getItem("num"));
      const amount = JSON.parse(localStorage.getItem("total_amount"));
      return {
        listCart,
        num,
        amount,
      };
    }
    case SET_STATUS_CART:
      return {
        ...state,
        status: action.payload,
      };
    case ADD_WISHLIST: {
      let list = JSON.parse(localStorage.getItem("wish_list"));
      const findIndex = list.findIndex(
        (item) => item._id === action.payload.item._id
      );
      if (findIndex === -1) {
        const productObj = {
          ...action.payload.item,
        };
        list.push(productObj);
        localStorage.setItem("wish_list", JSON.stringify(list));
      }

      return {
        ...state,
        wishlist: list,
        status: {
          type: "success",
          content: "Đã Thêm Vào Danh Sách Yêu Thích",
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
