import { Arrow } from "components/Icon";
import { Product } from "components/Product";
import React from "react";
import "./style.scss";
function BestSeller(props) {
  return (
    <section className="best-seller">
      <div className="container">
        <div className="best-seller__heading">
          <h3 className=" heading">Best Seller</h3>
          <Arrow rotate="-90deg" />
        </div>
        <div className="best-seller__list grid grid-col-4 grid-col-sm-2 grid-col-md-3">
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
