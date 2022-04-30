import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { fetchCartAction } from "redux/actions/cart";
import {
  fetchUserAction,
  getAddressAction,
  getWishListAction,
} from "redux/actions/user";
import cartReducer from "redux/reducer/cart";
import modalReducer from "redux/reducer/modal";
import productReducer from "redux/reducer/product";
import userReducer from "redux/reducer/user";
import rootSaga from "../redux/saga";

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  modal: modalReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const token = JSON.parse(localStorage.getItem("token"));

if (token) {
  store.dispatch(fetchUserAction());
  store.dispatch(fetchCartAction());
  store.dispatch(getAddressAction());
  store.dispatch(getWishListAction());
}

export default store;
