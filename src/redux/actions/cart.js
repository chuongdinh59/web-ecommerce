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
export const clearCartAction = () => {
    return {
        type: CLEAR_CART,
    }
}