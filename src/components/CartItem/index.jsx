import { Bin } from "components/Icon";
import React from "react";
import "./style.scss";
function CartItem(props) {
  return (
    <div className="cart-item">
      <label className="cart-item__info">
        <input type="checkbox" />
        <div className="cart-item__info__content">
          <img
            src="https://anphat.com.vn/media/product/33475_sony_playstation_5.jpg"
            alt=""
          />
          <p className="cart-item__info__name">
            Máy chơi game PS5 Máy chơi game PS5 Máy chơi game PS5 Máy chơi game
            PS5 Máy chơi game PS5
          </p>
        </div>
      </label>
      <span className="cart-item__price">1,000,000,000đ</span>
      <div className="cart-item__quatity">
        <button>
          <span>-</span>
        </button>
        <span className="quantity">1</span>
        <button>
          <span>+</span>
        </button>
      </div>
      <span className="cart-item__total">1,000,000,000đ</span>
      <span>
        <Bin />
      </span>
    </div>
  );
}

export default CartItem;
