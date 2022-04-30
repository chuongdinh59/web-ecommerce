import { FETCH_CART } from "constant"
import { SET_STATUS_CART } from "constant"
import { SET_CART } from "constant"
import { DECREASE_CART } from "constant"
import { CLEAR_CART, GET_CART, INCREASE_CART, REMOVE_CART } from "constant"



export const getCartAction = (data) => {
    return {
        type: GET_CART,
        payload: data
    }
}

export const removeCartAction = (data) => {
    return {
        type: REMOVE_CART,
        payload: data
    }
}
export const increaseCartAction = (data) => {
    return {
        type: INCREASE_CART,
        payload: data
    }
}
export const decreaseCartAction = (data) => {
    return {
        type: DECREASE_CART,
        payload: data
    }
}
export const clearCartAction = (data) => {
    return {
        type: CLEAR_CART,
        payload: data
    }
}
export const fetchCartAction = () => {
    return {
        type: FETCH_CART,
    }
}

export const setCartAction = (data) => {
return {
        type: SET_CART,
        payload: data
    }
}

export const setStatusCartAction = (data) => {
    return {
        type: SET_STATUS_CART,
        payload:data
    }
}