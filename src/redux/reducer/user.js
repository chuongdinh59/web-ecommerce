import {
  ADD_ADDRESS,
  CLOSE_ERROR,
  DELETE_ADDRESS,
  ERROR_LOGIN,
  ERROR_REGISTER,
  LOGOUT,
  REGISTER,
  REMOVE_WISHLIST,
  SET_ADDRESS,
  SET_ADDRESS_TO_SHIP,
  SET_LOADING,
  SET_USER,
  SET_WISHLIST,
} from "constant";
import useFirestore from "hooks/useFirestore";

let initialValue = {
  login: !!JSON.parse(localStorage.getItem("token")),
  loginErr: {},
  loading: false,
  registerErr: "",
  registerSuccess: "",
  updateSuccess: "",
  address: JSON.parse(localStorage.getItem("address_list")) || [],
  wishlist: JSON.parse(localStorage.getItem("wish_list")) || [],
  addressToShip: JSON.parse(localStorage.getItem("address_list"))?.find(
    (item) => item.default === true
  ),
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: true,
        login: true,
        loginErr: {},
        registerSuccess: "",
        registerErr: "",
      };
    case SET_ADDRESS:
      return {
        ...state,
        loading: false,
        address: JSON.parse(localStorage.getItem("address_list")) || [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        loading: false,
        registerErr: "",
        registerSuccess:
          "Congratulations register successful!!! Please login again!",
      };
    case ERROR_REGISTER:
      return {
        ...state,
        loading: false,
        registerErr: action.payload,
        registerSuccess: "",
      };
    case ERROR_LOGIN:
      return {
        ...state,
        loginErr: {
          type: "warning",
          content: "Tài khoản hoặc mật khẩu sai",
        },
      };
    case CLOSE_ERROR:
      return {
        ...state,
        loginErr: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: false,
        user: null,
        loading: false,
      };
    // case SET_ADDRESS: {
    //         return {
    //           ...state,
    //           address: JSON.parse(localStorage.getItem("address_list")),
    //         };
    // }
    case SET_WISHLIST:
      return {
        ...state,
        wishlist:
          action.payload.data ||
          JSON.parse(localStorage.getItem("wish_list")) ||
          [],
      };
    case REMOVE_WISHLIST:
      let list = JSON.parse(localStorage.getItem("wish_list"));
      list = list.filter((item) => {
        return item._id !== action.payload;
      });
      localStorage.setItem("wish_list", JSON.stringify(list));
      return {
        ...state,
        wishlist: list,
      };
    case DELETE_ADDRESS: {
      let address_list = JSON.parse(localStorage.getItem("address_list"));
      address_list = address_list.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("address_list", JSON.stringify(address_list));
      return {
        ...state,
        address: address_list,
      };
    }

    case SET_ADDRESS_TO_SHIP: {
      let address_list = JSON.parse(localStorage.getItem("address_list"));
      const findItem = address_list.find((item) => item.default === true);
      return {
        ...state,
        addressToShip: action.payload || findItem,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
