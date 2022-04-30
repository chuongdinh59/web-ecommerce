import { Buy } from "components/Icon";
import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function CartHeader(props) {
  const { num } = useSelector((store) => store.cart);

  return (
    <div className="cart-header">
      <div className="cart-header__icon">
        <Buy />
      </div>
      <span className="cart-header__number">{num}</span>
    </div>
  );
}

export default CartHeader;
