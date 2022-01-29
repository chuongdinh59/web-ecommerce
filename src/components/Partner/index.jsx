import React from "react";
import "./style.scss";
function Partner(props) {
  return (
    <section className="partner">
      <div className="container">
        <h1 className="partner-heading heading">PARTNER</h1>
        <img src="./img/cover.jpg" alt="" />
        <div className="partner-list grid grid-col-7">
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/mango.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/adidas.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/asos.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/bershka.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/reebok.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/stradivarius.svg" alt="" />
          </div>
          <div className="partner-list-item">
            <img src="./img/brands/gray-350/zara.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
