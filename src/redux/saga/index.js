import { ADD_WISHLIST } from "constant";
import { ADD_ADDRESS } from "constant";
import { REMOVE_WISHLIST } from "constant";
import { EDIT_ADDRESS } from "constant";
import {
  CLEAR_CART,
  DECREASE_CART,
  DELETE_ADDRESS,
  FETCH_CART,
  FETCH_CATEGORY,
  FETCH_DETAIL_PRODUCT,
  FETCH_LOGIN,
  FETCH_PRODUCT,
  FETCH_REGISTER,
  FETCH_UPDATE_ADDRESS,
  FETCH_UPDATE_INFO,
  FETCH_USER,
  GET_ADDRESS,
  GET_CART,
  GET_WISHLIST,
  INCREASE_CART,
  REMOVE_CART,
} from "constant";
import { takeEvery } from "redux-saga/effects";
import { fetchCart, fetchUpdateCart } from "./cartSaga";
import { fetchCategory, fetchDetailProduct, fetchProduct } from "./productSaga";
import {
  fetchLogin,
  fetchRegister,
  fetchUpdateAddress,
  fetchUpdateInfo,
  fetchUser,
  getAllAddress,
  getWishList,
  updateWishList,
} from "./userSaga";

function* rootSaga() {
  yield takeEvery(FETCH_LOGIN, fetchLogin);
  yield takeEvery(FETCH_USER, fetchUser);
  yield takeEvery(FETCH_REGISTER, fetchRegister);
  yield takeEvery(FETCH_CATEGORY, fetchCategory);
  yield takeEvery(FETCH_PRODUCT, fetchProduct);
  yield takeEvery(FETCH_DETAIL_PRODUCT, fetchDetailProduct);
  yield takeEvery(FETCH_CART, fetchCart);
  yield takeEvery(FETCH_UPDATE_INFO, fetchUpdateInfo);
  yield takeEvery(
    [FETCH_UPDATE_ADDRESS, DELETE_ADDRESS, ADD_ADDRESS, EDIT_ADDRESS],
    fetchUpdateAddress
  );
  yield takeEvery(GET_ADDRESS, getAllAddress);
  yield takeEvery(GET_WISHLIST, getWishList);
  yield takeEvery([REMOVE_WISHLIST, ADD_WISHLIST], updateWishList);
  yield takeEvery(
    [REMOVE_CART, GET_CART, CLEAR_CART, INCREASE_CART, DECREASE_CART],
    fetchUpdateCart
  );
}

export default rootSaga;
