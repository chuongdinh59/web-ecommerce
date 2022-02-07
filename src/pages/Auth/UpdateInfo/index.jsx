import Filter from "components/Filter";
import HelperText from "components/HelperText";
import Location from "components/Location";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
function UpdateInfo(props) {
  const updateRef = useRef();
  const { user } = useSelector((store) => store.user);
  console.log(user);
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
            <HelperText placeholder={`${user?.name || "Nhập họ tên"} `} />
          </div>
          <div className="update-item">
            <span className="title">Điện thoại di động</span>
            <HelperText placeholder="Nhập số điện thoại " />
          </div>
          <div className="update-item">
            <span className="title">Email</span>
            <HelperText placeholder="Email" />
          </div>
          <div className="update-item">
            <span className="title">Đia chỉ</span>
            <Location />
          </div>
          <div className="update-item ">
            <span className="title">Đường / Số nhà</span>
            <div className="update-item__address">
              <HelperText placeholder="Đường / Số nhà" />
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
