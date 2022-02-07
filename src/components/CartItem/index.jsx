import { Bin } from "components/Icon";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartAction,
  increaseCartAction,
  removeCartAction,
} from "redux/actions/cart";
import { numberWithCommas } from "utils/numberWithComas";
import "./style.scss";
function CartItem(props) {
  const { id, src, name, real_price, number, defaultPrice } = props;
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <label className="cart-item__info">
        <div className="cart-item__info__content">
          <img src={src} alt="" />
          <p className="cart-item__info__name">{name}</p>
        </div>
      </label>
      <span className="cart-item__price">
        {numberWithCommas(defaultPrice) + "đ"}
      </span>
      <div className="cart-item__quatity">
        <button
          onClick={() => {
            dispatch(decreaseCartAction(props));
          }}
        >
          <span>-</span>
        </button>
        <span className="quantity">{number}</span>
        <button
          onClick={() => {
            dispatch(increaseCartAction(props));
          }}
        >
          <span>+</span>
        </button>
      </div>
      <span className="cart-item__total">
        {numberWithCommas(real_price) + "đ"}
      </span>
      <span
        onClick={() => dispatch(removeCartAction(props))}
        className="pointer"
      >
        <Bin />
      </span>
    </div>
  );
}

export default CartItem;
