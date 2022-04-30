import { Rating } from "@mui/material";
import ButtonSe from "components/Button/ButtonSe";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalProductAction } from "redux/actions/modal";
import { numberWithCommas } from "utils/numberWithComas";
import Modal from "..";
import "./style.scss";
function ModalProduct() {
  const { currentProduct } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModalProductAction(""));
  };
  return (
    <Modal
      open={
        currentProduct && Object.keys(currentProduct).length > 0 ? true : false
      }
      handleClose={handleClose}
    >
      <div className="modal-product">
        <div className="modal-product__img">
          <img src={currentProduct?.src} alt="product modal" />
        </div>
        <div className="modal-product__info">
          <h3>{currentProduct?.name}</h3>
          <Rating value={currentProduct?.rating} readOnly precision={0.5} />
          <p>Description Description Description Description Description</p>
          <div className="number">
            <span className="price price--sell">
              {numberWithCommas(currentProduct?.price) + "VND"}
            </span>
            <span className="price price--real">
              {numberWithCommas(currentProduct?.real_price) + "VND"}
            </span>
          </div>
          <div className="modal-product__btn">
            <ButtonSe>Mua ngay</ButtonSe>
            <ButtonSe bgColor="tagColor" color="white">
              Yêu thích
            </ButtonSe>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProduct;
