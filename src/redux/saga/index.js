import { FETCH_USER } from "constant";
import { FETCH_REGISTER } from "constant";
import { FETCH_CATEGORY } from "constant";
import { FETCH_DETAIL_PRODUCT } from "constant";
import { FETCH_PRODUCT } from "constant";
import { FETCH_LOGIN } from "constant";
import { takeEvery } from "redux-saga/effects";
import { fetchCategory, fetchDetailProduct, fetchProduct } from "./productSaga";
import { fetchLogin, fetchRegister, fetchUser } from "./userSaga";



function* rootSaga () {
    yield takeEvery(FETCH_LOGIN, fetchLogin);
    yield takeEvery(FETCH_USER, fetchUser);
    yield takeEvery(FETCH_REGISTER, fetchRegister)
    yield takeEvery(FETCH_CATEGORY, fetchCategory)
    yield takeEvery(FETCH_PRODUCT, fetchProduct)
    yield takeEvery(FETCH_DETAIL_PRODUCT, fetchDetailProduct)
    
}

export default rootSaga;
