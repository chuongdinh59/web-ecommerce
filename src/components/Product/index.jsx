import { Buy, Eye, Heart } from "components/Icon";
import Rate from "components/Rating";
import React from "react";
import "./style.scss";
export function ProductList(props) {
  return (
    <section className=" container product-list">
      <h5 className="product-list__heading heading">
        Top month Sellers
        <span></span>
      </h5>
      <div className="product-list__field">
        <a href="/" className="title product-list__field__tab active">
          Smart Phone
        </a>
        <a href="/" className="title product-list__field__tab">
          Hàng Quốc Tế
        </a>
        <a href="/" className="title product-list__field__tab">
          Camera
        </a>
      </div>
      <div className="product-list__card grid grid-col-3 grid grid-col-sm-1 grid-col-md-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="discovery-more">
        <span className="title">Discovery More</span>
      </div>
    </section>
  );
}

export function Product(props) {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src="https://anphat.com.vn/media/product/33475_sony_playstation_5.jpg"
          alt="product"
        />
        <div className="product-img__control">
          <span className="product-img__control__btn">
            <Eye />
            <div className="overplay"></div>
          </span>
          <span className="product-img__control__btn">
            <Buy />
            <div className="overplay"></div>
          </span>
          <span className="product-img__control__btn">
            <Heart color="#000" />
            <div className="overplay"></div>
          </span>
        </div>
      </div>
      <div className="product-desc">
        <h5 className="product-desc__name title">Product title</h5>
        <div className="product-desc__price">
          <Rate index={5} />
          <div className="number">
            <span className="price price--sell">10,000</span>
            <span className="price price--real">100,000 đ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
