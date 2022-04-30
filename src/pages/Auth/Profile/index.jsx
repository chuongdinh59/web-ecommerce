import { Location } from "components/Icon";
import { Buy } from "components/Icon";
import { Star } from "components/Icon";
import { Heart, User } from "components/Icon";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.scss";
function Profile(props) {
  const refClass = useRef();
  useEffect(() => {
    const timeId = setTimeout(() => {
      refClass.current.classList.add("active");
    }, 200);
    return () => clearTimeout(timeId);
  }, []);
  return (
    <div className="profile container" ref={refClass}>
      <img
        src="../img/undraw_account_re_o7id.svg"
        alt=""
        className="profile-img"
      />
      <div className="profile-container">
        <div className="profile-heading heading">
          My Account <Star fill="#FDBC15" color={"#FDBC15"} />
        </div>
        <div className="profile-wrapper">
          <div className="profile-sidebar">
            <Link className="profile-sidebar__item" to={"/profile"}>
              <User />
              <h5>Thông tin cá nhân</h5>
            </Link>
            <Link className="profile-sidebar__item" to={"wishlist"}>
              <Heart />
              <h5>Sản phẩm yêu thích</h5>
            </Link>
            <Link className="profile-sidebar__item" to={"address"}>
              <Location />
              <h5>Danh sách địa chỉ</h5>
            </Link>
            <Link className="profile-sidebar__item" to={"order"}>
              <Buy />
              <h5>Danh sách đơn hàng</h5>
            </Link>
          </div>
          <div className="profile-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
