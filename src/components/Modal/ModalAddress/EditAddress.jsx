import ButtonSe from "components/Button/ButtonSe";
import Location from "components/Location";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAddress, setEditModalAction } from "redux/actions/user";
import Modal from "..";
import "./style.scss";
function EditAddressModal(props) {
  const [location, setLocation] = useState({ default: false });
  const { data, openEditModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      setEditModalAction({
        openEditModal: false,
        data: {},
      })
    );
  };
  return (
    <Modal open={openEditModal} handleClose={handleClose}>
      <div className="modal-addaddress">
        <div className="modal-addaddress__content">
          <Location
            location={location}
            defaultChoose={data?.default}
            setLocation={setLocation}
            defaultValue={{
              province: data?.province,
              district: data?.district,
              address: data?.address,
              adddress: data?.adddress,
            }}
          />
          <ButtonSe
            onClick={() => {
              dispatch(
                editAddress({
                  id: data?._id,
                  location: {
                    city: location?.city || data?.province,
                    district: location.district || data?.district,
                    ward: location?.ward || data?.address,
                    address: location?.address || data?.adddress,
                  },
                  default: location.default || false,
                })
              );
              handleClose();
            }}
          >
            Xác nhận chỉnh sửa
          </ButtonSe>
        </div>
      </div>
    </Modal>
  );
}

export default EditAddressModal;
