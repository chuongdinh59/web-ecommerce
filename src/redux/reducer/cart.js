import { DECREASE_CART } from "constant";
import { CLEAR_CART } from "constant";
import { REMOVE_CART } from "constant";
import { INCREASE_CART } from "constant";
import { GET_CART } from "constant";

const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const num = listCart.length;
const amount = JSON.parse(localStorage.getItem("amount")) || 0;
let initialValue = {
  listCart: listCart,
  num: num,
  amount: amount,
//   ship: 0,
};
const cartReducer = (state = initialValue, action) => {
    console.log(action);
    switch (action.type) {
        case GET_CART:
            let { listCart, num, amount } = state
            action.payload.number = action.payload.number || 1
            const findIndex = listCart.findIndex((item) => item.id === action.payload.id)
            if (findIndex !== -1) {
                listCart[findIndex].number += action.payload.number
                listCart[findIndex].real_price =listCart[findIndex].number * listCart[findIndex].defaultPrice
                amount = action.payload.real_price * listCart[findIndex].number
            }
            else {
                listCart.push(action.payload)
                amount += action.payload.real_price * action.payload.number
                action.payload.real_price *= action.payload.number
            }
            localStorage.setItem('list_cart', JSON.stringify(listCart))
            localStorage.setItem('total_amout', JSON.stringify(amount))
            return {
                ...state,
                amount,
                listCart,
                num: num + action.payload.number,
            }
        case INCREASE_CART: {
            let { listCart, num, amount } = state
            const findIndex = listCart.findIndex((item) => item.id === action.payload.id)
            listCart[findIndex].number += 1;
            listCart[findIndex].real_price = action.payload.defaultPrice *  listCart[findIndex].number;
            amount+= action.payload.defaultPrice 
            localStorage.setItem('list_cart', JSON.stringify(listCart))
            localStorage.setItem('total_amout', JSON.stringify(amount))
            return {
                ...state,
                listCart,
                amount,
                num: num + 1
            }
        }
        case DECREASE_CART: {
            let { listCart, num, amount } = state
            const findIndex = listCart.findIndex((item) => item.id === action.payload.id)
            if (listCart[findIndex].number === 1) {
                listCart.splice(findIndex, 1) 
                amount = 0
            }
            else {
                listCart[findIndex].number -= 1;
                listCart[findIndex].real_price -= action.payload.defaultPrice ;
                amount-= action.payload.defaultPrice 
            }
            console.log(listCart);
            localStorage.setItem('list_cart', JSON.stringify(listCart))
            localStorage.setItem('total_amout', JSON.stringify(amount))
             return {
                ...state,
                listCart,
                amount,
                num: num - 1
            }
        }
        case REMOVE_CART: {
            let { listCart, num, amount } = state
            const findIndex = listCart.findIndex((item) => item.id === action.payload.id)
            amount -= listCart[findIndex].number * listCart[findIndex].defaultPrice
            listCart.splice(findIndex, 1) 
            localStorage.setItem('list_cart', JSON.stringify(listCart))
            localStorage.setItem('total_amout', JSON.stringify(amount))
             return {
                ...state,
                listCart,
                amount,
                num: num - 1
            }
        }
        case CLEAR_CART: {
            let { listCart, num, amount } = state
            listCart = []
            num = 0;
            amount = 0
            localStorage.setItem('list_cart', JSON.stringify(listCart))
            localStorage.setItem('total_amout', JSON.stringify(amount))
             return {
                ...state,
                listCart,
                amount,
                num: num - 1
            }
        }
        default:
            return {
                 ...state
             }
    }

}

export default cartReducer
