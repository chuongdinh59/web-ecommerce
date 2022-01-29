import CartItem from "components/CartItem";
import Filter from "components/Filter";
import Header from "components/Header";
import HelperText from "components/HelperText";
import { Bin } from "components/Icon";
import React from "react";
import "./style.scss";
function CheckOut(props) {
  return (
    <>
      <Header />
      <section className="checkout container">
        <div className="cart">
          <div className="cart-field">
            <label className="cart-field__all">
              <Filter type="text" field="Tất cả ( 1 sản phẩm )" />
            </label>
            <span className="cart-field__price">Đơn giá</span>
            <span className="cart-field__quantity">Số lượng</span>
            <span className="cart-field__total">Thành tiền</span>
            <span className="cart-field__delete">
              <Bin />
            </span>
          </div>
          <div className="cart-main">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="checkout-info">
          <div className="checkout-info__heading">
            <span>Giao tới</span>
            <a href="!" className="title">
              Thay đổi
            </a>
          </div>
          <div className="checkout-info__preivew">
            <span className="name">Thái Bảo</span>
            <span className="sep"></span>
            <span className="phone">0334436231</span>
          </div>
          <p className="checkout-info__address text">
            Xã Tam Thôn Hiệp An Lộc, Xã Tam Thôn Hiệp, Huyện Cần Giờ, Hồ Chí
            Minh
          </p>
          <div className="checkout-info__price">
            <div className="price-temp price-item">
              <span className="title">Tạm tính</span>
              <span>0 đ</span>
            </div>
            <div className="price-sale price-item">
              <span className="title">Giảm giá</span>
              <span>0 đ</span>
            </div>
            <div className="price-total price-item">
              <span className="title">Tổng cộng</span>
              <span>0 đ</span>
            </div>
            <div className="price-item voucher">
              <HelperText placeholder="Bạn có voucher chứ " />
            </div>
          </div>
          <div className="checkout-info__btn">
            <div>
              <button>Mua Hàng ( 0 sản phẩm )</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CheckOut;
