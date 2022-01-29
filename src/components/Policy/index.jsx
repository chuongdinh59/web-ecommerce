import { Return } from "components/Icon";
import { Security } from "components/Icon";
import { Tag } from "components/Icon";
import { Truck } from "components/Icon";
import React from "react";
import "./style.scss";
function Policy(props) {
  return (
    <section className=" policy container">
      <div className="grid grid-col-4 grid-col-sm-1 policy-list">
        <div className="policy-item">
          <div className="policy-item__icon--red">
            <Truck />
          </div>
          <div className="policy-item__content">
            <span className="policy-item__content__title">FREE SHIP</span>
            <span className="policy-item__content__desc ">
              From all orders over $100
            </span>
          </div>
        </div>
        <div className="policy-item">
          <div className="policy-item__icon--red">
            <Return />
          </div>
          <div className="policy-item__content">
            <span className="policy-item__content__title">FREE RETURN</span>
            <span className="policy-item__content__desc">
              From all orders over $100
            </span>
          </div>
        </div>
        <div className="policy-item">
          <div className="policy-item__icon--red">
            <Security />
          </div>
          <div className="policy-item__content">
            <span className="policy-item__content__title">SECURE SHOPING</span>
            <span className="policy-item__content__desc ">
              From all orders over $100
            </span>
          </div>
        </div>
        <div className="policy-item">
          <div className="policy-item__icon--red">
            <Tag />
          </div>
          <div className="policy-item__content">
            <span className="policy-item__content__title">
              OVER 10,000 STYLES
            </span>
            <span className="policy-item__content__desc">
              From all orders over $100
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Policy;
