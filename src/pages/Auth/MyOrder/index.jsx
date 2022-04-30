import React from "react";
import "./style.scss";
function MyOrder(props) {
  return (
    <div className="order">
      <div className="order-item">
        <div className="order-represent pointer">
          <img src="../img/camera.jpg" alt="" />
          <div className="order-quantity">5 +</div>
        </div>
        <div className="order-content">
          <div className="order-content__date">Ngày đặt đơn: 20/2/2022</div>
          <div className="order-content__price">
            <span className="price total-price">1,000,000đ</span>
            <span className="quantity">Số lượng: 10 sản phẩm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
