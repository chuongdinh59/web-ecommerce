import { REGISTER } from "constant";
import { ERROR_LOGIN } from "constant";
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
        user: action.payload.user,
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
      console.log('IN ERROR REGISTER');
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
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
