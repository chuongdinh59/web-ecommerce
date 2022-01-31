import Footer from "components/Footer";
import Header from "components/Header";
import Rate from "components/Rating";
import BestSeller from "pages/Category/BestToday";
import React from "react";
import Tag from "../Tag";
import "./style.scss";
function ProductDetail(props) {
  return (
    <>
      <Header />
      <section className="product-detail grid grid-col-sm-1 container">
        <div className="product-detail__img">
          <img src="./img/laptop.jpg" alt="" />
        </div>
        <div className="product-detail__info">
          <h3 className="product-detail__info__name title">
            CỐC GIỮ NHIỆT ELMICH INOX 304 470ML EL3668
          </h3>
          <Rate index={5} /> (Xem 168 đánh giá)
          <div className="product-detail__info__price">
            <div className="price--real">92,000 đ</div>
            <div className="sale">
              <span className="price--sell">100,000 đ</span>
              <Tag color="red" size="medium" />
            </div>
          </div>
          <div className="product-detail__info__address">
            <p>Giao đến:</p>
            <a href="!">H. Cần Giờ, X. Tam Thôn Hiệp, Hồ Chí Minh</a>
            <a href="!" className="change-address">
              Đổi địa chỉ
            </a>
          </div>
          <p className="product-detail__info__shortdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            consequatur voluptatem excepturi quod, sint dicta quas aut,
            voluptatibus dolores deserunt earum! Aspernatur itaque non
            consequatur cum nobis magni distinctio unde! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quis consequatur voluptatem
            excepturi quod, sint dicta quas aut, voluptatibus dolores deserunt
            earum! Aspernatur itaque non consequatur cum nobis magni distinctio
            unde!
          </p>
          <div className="product-detail__info__btn">
            <div className="product-detail__info__btn__quantity">
              <button className="decrease btn">
                <span>-</span>
              </button>
              <span>1</span>
              <button className="increase btn">
                <span>+</span>
              </button>
            </div>
            <div className="btn-control">
              <button className="buy">Chọn mua</button>
              <button className="wishlist">Yêu thích</button>
            </div>
          </div>
        </div>
      </section>
      <BestSeller />
      <Footer />
    </>
  );
}

export default ProductDetail;
