import Rate from "components/Rating";
import React from "react";
import "./style.scss";
export function Review({ children }) {
  return (
    <div className="review">
      <div className="review-info">
        <div className="review-info__avatar">
          <img src="./img/avatar.png" alt="avatar" />
        </div>
        <div className="review-info__detail">
          <p className="type-1">Shoes</p>
          <p className="type-2 title">Low top Sneaker</p>
          <Rate index={5} />
        </div>
      </div>
      <p className="review-desc text">{children}</p>
      <span className="review-author text">Dinh Chuong, 01 Jun 2019</span>
    </div>
  );
}
export function ReviewCarousel(props) {
  return (
    <section className="review-carousel">
      <div className="container">
        <p className="review-carousel__intro text">WHAT BUYERS SAY</p>
        <p className="review-carousel__heading heading">
          Lastest buyers Reviews
        </p>
        <div className="review-carousel__content grid grid-col-3 grid-col-sm-1">
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
        </div>
      </div>
    </section>
  );
}
