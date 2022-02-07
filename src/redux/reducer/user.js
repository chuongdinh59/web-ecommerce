import { REGISTER } from "constant";
import { ERROR_LOGIN } from "constant";
import { LOGOUT } from "constant";
import { ERROR_REGISTER } from "constant";
import { SET_LOADING } from "constant";
import { SET_USER } from "constant";

let initialValue = {
  login: !!JSON.parse(localStorage.getItem('token')),
  loginErr: "",
  loading: false,
  registerErr: "",
  registerSuccess: "",
  updateSuccess: "",
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: true,
        login: true,
        loginErr: "",
        registerSuccess: "",
        registerErr: "",
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
        registerSuccess: "Congratulations register successful!!! Please login again!"
      }
    case ERROR_REGISTER:
      return {
        ...state,
        loading: false,
        registerErr: action.payload,
        registerSuccess: ""
      }
    case ERROR_LOGIN:
      return {
        ...state,
        loginErr: action.payload
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        login: false,
        user: null
      }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
