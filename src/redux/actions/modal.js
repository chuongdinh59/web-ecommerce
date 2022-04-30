import { SET_ADD_ADDRESS_MODAL } from "constant"
import { SET_MODAL_ADDRESS } from "constant"
import { SET_MODAL_PRODUCT } from "constant"

export const setModalProductAction = (data) => {
    return {
        type: SET_MODAL_PRODUCT,
        payload: data
    }
} 

export const setModalAddressAction = (data) => {
    return {
        type: SET_MODAL_ADDRESS,
        payload: data
    }
}
export const setModalAddAddressAction = (data) => {
  return {
    type: SET_ADD_ADDRESS_MODAL,
    payload: data
  }
}