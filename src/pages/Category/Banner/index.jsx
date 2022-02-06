import React from "react";
import Flickity from "react-flickity-component";
import "./style.scss";
function Banner(props) {
  const flickityOptions = {
    wrapAround: true,
  };
  return (
    <section className="banner ">
      <div className="container banner-container grid grid-col-sm-1">
        <div className="banner-carousel">
          <Flickity options={flickityOptions}>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner1.webp" alt="" />
            </div>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner2.webp" alt="" />
            </div>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner3.webp" alt="" />
            </div>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner4.webp" alt="" />
            </div>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner5.webp" alt="" />
            </div>
            <div className="banner-carousel__item">
              <img src="./img/banner/banner6.webp" alt="" />
            </div>
          </Flickity>
        </div>
        <div className="banner-highlight">
          <img
            src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-chinese-new-year-sale-baner--banner-sale-png-image_3596208.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
