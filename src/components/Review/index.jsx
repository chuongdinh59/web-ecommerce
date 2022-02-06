import Rate from "components/Rating";
import React from "react";
import Flickity from "react-flickity-component";
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
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "left",
  };
  return (
    <section className="review-carousel">
      <p className="review-carousel__intro text">WHAT BUYERS SAY</p>
      <p className="review-carousel__heading heading">Lastest buyers Reviews</p>
      <div className="review-carousel__content grid grid-col-3 grid-col-sm-1">
        <Flickity FlickityOptions={flickityOptions}>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            adipisci distinctio assumenda voluptatum necessitatibus, dolor
            dignissimos voluptas, reiciendis eaque excepturi doloremque corrupti
            ab ea veniam vero consequunturadipisci distinctio assumenda
            voluptatum necessitatibus, dolor dignissimos voluptas, reiciendis
            eaque excepturi doloremque corrupti ab ea veniam vero consequuntu
            vitae, dolorem minima?
          </Review>
        </Flickity>
      </div>
    </section>
  );
}
