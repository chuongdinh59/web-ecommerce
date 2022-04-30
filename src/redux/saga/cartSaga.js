import { CLEAR_CART, DECREASE_CART, REMOVE_CART } from "constant";
import { call, put, select } from "redux-saga/effects";
import { setCartAction } from "redux/actions/cart";
import cartService from "service/cartService";

export function* fetchUpdateCart(action) {
  let state = yield select();
  if (
    action.type === REMOVE_CART ||
    (action.type === DECREASE_CART && action.payload.number === 1)
  ) {
    yield call(cartService.removeCart, action.payload.id);
  } else if (action.type === CLEAR_CART) {
    for (let i = 0; i < action.payload.length; i++) {
      yield call(cartService.removeCart, action.payload[i].id);
    }
  } else {
    yield call(cartService.quatity, {
      ...state?.cart,
      currentCart: action.payload.id,
    });
    // yield put(fetchCartAction())
  }
}

export function* fetchCart() {
  let listCart = [];
  const res = yield call(cartService.getCart);
  const cart = res.data.listItems;
  const amount = res.data.subTotal;
  const num = res.data.totalQuantity;
  cart.forEach((item) => {
    const number = item.quantity;
    item = item.product;
    const itemFormat = {
      id: item._id,
      src: item.thumbnail_url,
      name: item.name,
      real_price: item.real_price,
      number: number,
      defaultPrice: item.real_price,
    };
    listCart.push(itemFormat);
  });
  localStorage.setItem("list_cart", JSON.stringify(listCart));
  localStorage.setItem("total_amount", JSON.stringify(amount));
  localStorage.setItem("num", JSON.stringify(num));
  yield put(setCartAction());
}
