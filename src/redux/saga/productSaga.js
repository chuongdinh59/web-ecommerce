import { call, put } from 'redux-saga/effects';
import { loadingProductAction, setCategoryAction, setProductAction, setProductDetailAction } from 'redux/actions/product';
import productService from 'service/productService';



export function* fetchCategory() {
    yield put(loadingProductAction(true))
    const res = yield call(productService.category)
    yield put(setCategoryAction(res))
}

export function* fetchProduct(data) {
    yield put(loadingProductAction(true))
    const res = yield call(productService.product, data.payload)
    yield put(setProductAction(res))
}
export function* fetchDetailProduct(data) {
    yield put(loadingProductAction(true))
    const res = yield call(productService.productDetail, data.payload)
    yield put(setProductDetailAction(res))
}