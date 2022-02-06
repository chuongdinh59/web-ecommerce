import { SET_CATEGORY } from "constant"
import { SET_PRODUCT } from "constant"
import { FETCH_PRODUCT } from "constant"
import { FETCH_CATEGORY } from "constant"
import { LOADING_PRODUCT } from "constant"


export const loadingProductAction = (data) => {
    return {
        type: LOADING_PRODUCT,
        payload: data
    }
}

export const fetchCategoryAction = () => {
    return {
        type: FETCH_CATEGORY
    }
}

export const setCategoryAction = (data) => {
    return {
        type: SET_CATEGORY,
        payload: data
    }
}

export const fetchProductAction = (data) => {
    return {
        type: FETCH_PRODUCT,
        payload: data
    }
}

export const setProductAction = (data) => {
    return {
        type: SET_PRODUCT,
        payload: data
    }
}