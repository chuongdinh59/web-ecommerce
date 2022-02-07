import CartItem from "components/CartItem";
import Filter from "components/Filter";
import Header from "components/Header";
import Helmet from "components/Helmet";
import HelperText from "components/HelperText";
import { Bin } from "components/Icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction } from "redux/actions/cart";
import { numberWithCommas } from "utils/numberWithComas";
import "./style.scss";
function CheckOut(props) {
  const { listCart, amount, num } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <Helmet title="Giỏ Hàng">
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
              onClick={() => dispatch(clearCartAction())}
            >
              <Bin />
            </span>
          </div>
          <div className="cart-main">
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
            {listCart &&
              listCart?.map((cart) => {
                return (
                  <CartItem
                    id={cart?.id}
                    src={cart?.src}
                    name={cart?.name}
                    real_price={cart?.real_price}
                    number={cart?.number}
                    defaultPrice={cart?.defaultPrice}
                  />
                );
              })}
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
              <HelperText placeholder="Bạn có voucher chứ " />
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
