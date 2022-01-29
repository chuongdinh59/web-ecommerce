import React from "react";
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
            <div className="colection-galary__item__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </div>
          </div>
          <div className="colection-galary__item">
            <img src="./img/xiaomiphone.jpg" alt="laptop" />
            <div className="overplay"></div>
            <div className="colection-galary__item__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </div>
          </div>
          <div className="colection-galary__item">
            <img src="./img/washsing.jpg" alt="laptop" />
            <div className="overplay"></div>
            <div className="colection-galary__item__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </div>
          </div>
          <div className="colection-galary__item">
            <img src="./img/camera.jpg" alt="laptop" />
            <div className="overplay"></div>
            <div className="colection-galary__item__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </div>
          </div>
          <div className="colection-galary__item">
            <img src="./img/robocleaner.jpg" alt="laptop" />
            <div className="overplay"></div>
            <div className="colection-galary__item__btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <a href="!">Go to Colection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColectionPreview;
