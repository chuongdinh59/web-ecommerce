import React from "react";
import "./style.scss";
function Banner(props) {
  return (
    <section className="banner ">
      <div className="container banner-container grid grid-col-sm-1">
        <div className="banner-carousel">
          <div className="banner-carousel__item">
            <img src="./img/banner/banner1.webp" alt="" />
          </div>
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
