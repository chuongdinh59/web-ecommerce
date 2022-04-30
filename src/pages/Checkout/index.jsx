import CartItem from "components/CartItem";
import Header from "components/Header";
import Helmet from "components/Helmet";
import HelperText from "components/HelperText";
import { Bin } from "components/Icon";
import ModalAddress from "components/Modal/ModalAddress";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartAction } from "redux/actions/cart";
import { setModalAddressAction } from "redux/actions/modal";
import { numberWithCommas } from "utils/numberWithComas";
import "./style.scss";
function CheckOut(props) {
  const { listCart, amount, num } = useSelector((store) => store.cart);
  const { addressToShip } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Helmet title="Giỏ Hàng">
      <ModalAddress />
      <Header />
      <section className="checkout container">
        <div className="cart">
          <div className="cart-field">
            <label className="cart-field__all">
              <span>Tất cả ( {num >= 0 ? num : 0} sản phẩm ) </span>
            </label>
            <span className="cart-field__price">Đơn giá</span>
            <span className="cart-field__quantity">Số lượng</span>
            <span className="cart-field__total">Thành tiền</span>
            <span
              className="cart-field__delete pointer"
              onClick={() => dispatch(clearCartAction(listCart))}
            >
              <Bin />
            </span>
          </div>
          {listCart?.length > 0 && (
            <div className="cart-main">
              {listCart?.map((cart) => {
                return (
                  cart?.number > 0 && (
                    <CartItem
                      key={cart?.id}
                      id={cart?.id}
                      src={cart?.src}
                      name={cart?.name}
                      real_price={cart?.real_price}
                      number={cart?.number}
                      defaultPrice={cart?.defaultPrice}
                    />
                  )
                );
              })}
            </div>
          )}
        </div>
        <div className="checkout-info">
          <div className="checkout-info__heading">
            <span>Giao tới</span>
            <button
              className="title"
              onClick={() => {
                dispatch(setModalAddressAction(true));
              }}
            >
              Thay đổi
            </button>
          </div>
          <div className="checkout-info__preivew">
            <span className="name">Thái Bảo</span>
            <span className="sep"></span>
            <span className="phone">0334436231</span>
          </div>
          {addressToShip ? (
            <p className="checkout-info__address text">
              {addressToShip?.address +
                ", " +
                addressToShip?.district +
                ", " +
                addressToShip?.province}
            </p>
          ) : (
            <span
              className="error-address"
              onClick={() => {
                navigate("/profile/address");
              }}
            >
              Chưa có địa chỉ mặt định
            </span>
          )}
          <div className="checkout-info__price">
            <div className="price-temp price-item">
              <span className="title">Tạm tính</span>
              <span>{numberWithCommas(amount) + " đ"}</span>
            </div>
            <div className="price-sale price-item">
              <span className="title">Giảm giá</span>
              <span>0 đ</span>
            </div>
            <div className="price-total price-item">
              <span className="title">Tổng cộng</span>
              <span>{numberWithCommas(amount) + " đ"}</span>
            </div>
            <div className="price-item voucher">
              <HelperText placeholder="Voucher giảm giá" />
            </div>
          </div>
          <div className="checkout-info__btn">
            <div>
              <button>Mua Hàng ( {num >= 0 ? num : 0} sản phẩm )</button>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}
export default CheckOut;
