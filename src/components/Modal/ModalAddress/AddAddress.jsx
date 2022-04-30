import ButtonSe from "components/Button/ButtonSe";
import Location from "components/Location";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAddAddressAction } from "redux/actions/modal";
import { addAddressAction } from "redux/actions/user";
import Modal from "..";

function AddAddressModal(props) {
  const { open } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const [location, setLocation] = useState({ default: false });
  const handleClose = () => {
    dispatch(setModalAddAddressAction(false));
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="modal-addaddress">
        <div className="modal-addaddress__content">
          <Location location={location} setLocation={setLocation} />
          <ButtonSe
            onClick={() => {
              dispatch(addAddressAction(location));
              handleClose();
            }}
          >
            Xác nhận thêm địa chỉ mới
          </ButtonSe>
        </div>
      </div>
    </Modal>
  );
}

export default AddAddressModal;
