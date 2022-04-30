import ButtonSe from "components/Button/ButtonSe";
import React, { useState } from "react";
import Flickity from "react-flickity-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setModalAddressAction } from "redux/actions/modal";
import { setAddressAction } from "redux/actions/user";
import Modal from "..";
import "./style.scss";
function ModalAddress(props) {
  const { currentAddress, open } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModalAddressAction(false));
  };
  const flickityOptions = {
    cellAlign: "left",
    prevNextButtons: false,
  };
  const [selectItem, setSelectItem] = useState(() => {
    return currentAddress.find((item) => item.default === true);
  });

  return (
    <Modal open={open} handleClose={handleClose}>
      {/* grid grid-col-3 */}
      <div className="modal-address ">
        {currentAddress?.length > 0 && (
          <Flickity options={flickityOptions}>
            {currentAddress?.map((item, index) => {
              return (
                <div
                  className={`modal-address__item ${
                    item?._id === selectItem?._id && "active"
                  }`}
                  key={index}
                  onClick={() => setSelectItem(item)}
                >
                  <div className="modal-address__item__control">
                    <div className="modal-address__item__edit pointer">
                      Chỉnh sửa
                    </div>
                  </div>
                  <div className="modal-address__item__detail">
                    <span className="text">Thành Phố :</span>
                    <span className="">{item.province}</span>
                  </div>
                  <div className="modal-address__item__detail">
                    <span className="text">Quận/Huyện :</span>
                    <span className="">{item.district}</span>
                  </div>
                  <div className="modal-address__item__detail">
                    <span className="text">Xã/Phường :</span>
                    <span className="">{item.address}</span>
                  </div>
                </div>
              );
            })}
          </Flickity>
        )}

        <div className="modal-address__img img-1">
          <img src="./img/undraw_world_re_768g.svg" alt="" />
        </div>
        <div className="modal-address__img img-2">
          <img src="./img/undraw_server_status_re_n8ln.svg" alt="" />
        </div>
        <div className="modal-address__btn">
          {currentAddress?.length > 0 ? (
            <ButtonSe
              onClick={() => {
                dispatch(setAddressAction(selectItem));
                dispatch(setModalAddressAction(false));
              }}
            >
              Lựa chọn
            </ButtonSe>
          ) : (
            <ButtonSe>
              <Link
                to={"/profile"}
                onClick={() => dispatch(setModalAddressAction(false))}
              >
                Thêm địa chỉ
              </Link>
            </ButtonSe>
          )}
        </div>
        <div className="modal-address__shape"></div>
      </div>
    </Modal>
  );
}

export default ModalAddress;
