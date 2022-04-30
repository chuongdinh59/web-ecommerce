import { Bin } from "components/Icon";
import AddAddressModal from "components/Modal/ModalAddress/AddAddress";
import EditAddressModal from "components/Modal/ModalAddress/EditAddress";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAddAddressAction } from "redux/actions/modal";
import { deleteAddressAction, setEditModalAction } from "redux/actions/user";
import "./style.scss";
function AddressList(props) {
  const dispatch = useDispatch();
  let { address } = useSelector((store) => store.user);

  return (
    <>
      <AddAddressModal />
      <EditAddressModal />
      <div className="addresslist">
        <div
          className="addresslist-add pointer"
          onClick={() => dispatch(setModalAddAddressAction(true))}
        >
          + <span>Thêm địa chỉ</span>
        </div>
        {address?.length > 0 &&
          address?.map((item, index) => {
            return (
              <div className="address-item" key={index}>
                <div className="address-item__heading">
                  <div className="address-item__heading__info">
                    {/* <h3 className="name title">Thái Bảo</h3> */}
                    {item?.default && (
                      <h4 className="status">Địa chỉ mặc định</h4>
                    )}
                  </div>
                  <div className="address-item__btn">
                    <div
                      className="address-item__btn__edit pointer"
                      onClick={() =>
                        dispatch(
                          setEditModalAction({
                            open: true,
                            data: item,
                          })
                        )
                      }
                    >
                      Chỉnh sửa
                    </div>
                    {!item?.default && (
                      <div
                        className="address-item__btn__delete pointer"
                        onClick={() => dispatch(deleteAddressAction(item))}
                      >
                        <Bin />
                      </div>
                    )}
                  </div>
                </div>
                <div className="address-item__main">
                  <div className="address item">
                    <span className="text">Địa chỉ: </span>
                    <span>
                      {item?.address +
                        ", " +
                        item?.district +
                        ", " +
                        item?.province}
                    </span>
                  </div>
                  <div className="phone item">
                    <span className="text">Điện thoại: </span>
                    <span>0334436231</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AddressList;
