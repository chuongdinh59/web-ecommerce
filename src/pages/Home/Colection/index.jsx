import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function ColectionPreview(props) {
  return (
    <section className="colection">
      <div className="container">
        <h3 className="colection-heading heading">Best Pick 2021</h3>
        <p className="colection-desc text">
          Appear, dry these darkness they're seas, dry waters thing fly midst.
          Beast above fly brought very green
        </p>
        <div className="colection-galary grid grid-col-3">
          <div className="colection-galary__item">
            <img src="./img/laptop.jpg" alt="laptop" />
            <div className="overplay"></div>
            <Link
              className="colection-galary__item__btn"
              to={"/shop?categories=1846"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </Link>
          </div>
          <div className="colection-galary__item">
            <img src="./img/xiaomiphone.jpg" alt="laptop" />
            <div className="overplay"></div>
            <Link
              className="colection-galary__item__btn"
              to={"/shop?categories=1789"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </Link>
          </div>
          <div className="colection-galary__item">
            <img src="./img/washsing.jpg" alt="laptop" />
            <div className="overplay"></div>
            <Link
              className="colection-galary__item__btn"
              to={"/shop?categories=1882"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </Link>
          </div>
          <div className="colection-galary__item">
            <img src="./img/camera.jpg" alt="laptop" />
            <div className="overplay"></div>
            <Link
              className="colection-galary__item__btn"
              to={"/shop?categories=1801"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </Link>
          </div>
          <div className="colection-galary__item">
            <img src="./img/robocleaner.jpg" alt="laptop" />
            <div className="overplay"></div>
            <Link
              className="colection-galary__item__btn"
              to={"/shop?categories=1883"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColectionPreview;
