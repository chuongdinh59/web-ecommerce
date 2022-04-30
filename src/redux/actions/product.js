import { FETCH_CATEGORY, FETCH_DETAIL_PRODUCT, FETCH_PRODUCT, GRID_VIEW, LIST_VIEW, LOADING_PRODUCT, SET_CATEGORY, SET_PRODUCT, SET_PRODUCT_DETAIL } from "constant"


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

export const setGridViewAction = () => {
    return {
        type: GRID_VIEW
    }
}
export const setListViewAction = () => {
    return {
        type: LIST_VIEW
    }
}

export const fetchDetailProductAction = (data) => {
    return {
        type: FETCH_DETAIL_PRODUCT,
        payload:data
    }
}
export const setProductDetailAction =  (data) => {
 return {
        type: SET_PRODUCT_DETAIL,
        payload:data
    }
}

