import { Buy } from "components/Icon";
import React from "react";
import "./style.scss";
function CartHeader(props) {
  return (
    <div className="cart-header">
      <div className="cart-header__icon">
        <Buy />
      </div>
      <span className="cart-header__number">1</span>
    </div>
  );
}

export default CartHeader;
