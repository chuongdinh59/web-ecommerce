import Filter from "components/Filter";
import HelperText from "components/HelperText";
import React, { useEffect, useRef } from "react";
import "./style.scss";
function UpdateInfo(props) {
  const updateRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      updateRef.current.classList.add("active");
    }, 200);
  }, []);

  return (
    <section className=" update-wrapper" ref={updateRef}>
      <div className="update-container container">
        <img src="./img/undraw_creative_team_r90h.svg" alt="" />
        <form className="update ">
          <div className="update-item">
            <span className="title">Họ tên</span>
            <HelperText placeholder="Nhập họ tên" />
          </div>
          <div className="update-item">
            <span className="title">Điện thoại di động</span>
            <HelperText placeholder="Nhập số điện thoại " />
          </div>
          <div className="update-item">
            <span className="title">Tỉnh/thành phố</span>
            <HelperText placeholder="Chọn Tỉnh/Thành Phố " />
          </div>
          <div className="update-item">
            <span className="title">Quận/Huyện</span>
            <HelperText placeholder="Chọn Quận/Huyện " />
          </div>
          <div className="update-item">
            <span className="title">Phường/Xã</span>
            <HelperText placeholder="Chọn Phường/Xã " />
          </div>
          <div className="update-item ">
            <span className="title">Địa chỉ</span>
            <div className="update-item__address">
              <HelperText placeholder="Địa chỉ" />
              <label className="default-address">
                <Filter
                  field="Sử dụng địa chỉ này làm địa chỉ mặc định"
                  type="text"
                />
              </label>
            </div>
          </div>

          <div className="update-form__btn">
            <button>Cập nhật</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateInfo;
