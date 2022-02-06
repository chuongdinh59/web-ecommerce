import Button from "components/Button";
import { API } from "constant";
import React from "react";
import Flickity from "react-flickity-component";
import "./style.scss";
function Slider(props) {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "left",
    groupCells: 1,
    prevNextButtons: false,
    autoPlay: true,
  };

  const sliders = [
    {
      img: "./img/iphone.png",
      content: "IPHONE 13 Pro Max",
      bgShape: "blue",
      link: `shop?categories=1789`,
    },
    {
      img: "./img/camera2.png",
      content: "CAMERA SONY S5",
      bgShape: "pink",
      link: "shop?categories=1801",
    },
    {
      img: "./img/laptop2.png",
      content: "LAPTOP ASUS GAMING",
      bgShape: "orange",
      link: "shop?categories=1846",
    },
  ];
  return (
    <section className="slider container">
      <div className="slider-center">
        <Flickity options={flickityOptions}>
          {sliders?.map((slider) => {
            return (
              <SliderItem
                src={slider.img}
                content={slider.content}
                color={slider.bgShape}
                link={slider.link}
              />
            );
          })}
        </Flickity>
      </div>
    </section>
  );
}
function SliderItem({
  src = "./img/iphone.png",
  content = "IPHONE 13 Pro Max",
  color,
  link,
}) {
  return (
    <div className="slider-item">
      <div className="slider-item__content">
        <h3 className="slider-item__content__title ">{content}</h3>
        <p className="slider-item__content__slogan">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores cum
          ea aperiam optio placeat aspernatur consequatur totam sit, iam optio
          placeat aspernatur consequatur totam sit,
        </p>
        {/* <button className="link_wrapper">
          <a href="!" className="discovery">
            Khám phá
          </a>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </button> */}
        <div className="slider-item__btn">
          <Button link={link} />
        </div>
      </div>
      <div className="slider-item__img">
        <img src={src} alt="" />
      </div>
      <div className={`slider-item__shape bg-${color}`}></div>
    </div>
  );
}

export default Slider;
