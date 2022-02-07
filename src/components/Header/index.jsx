import ButtonSe from "components/Button/ButtonSe";
import CartHeader from "components/CartHeader";
import { Search } from "components/Icon";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "redux/actions/user";
import "./style.scss";
function Header(props) {
  const iconBarRef = useRef();
  const dispatch = useDispatch();
  const menuRef = useRef();
  const handleOpenMenuMoible = () => {
    iconBarRef.current.classList.toggle("on");
    menuRef.current.classList.toggle("on");
  };

  const { user } = useSelector((store) => store.user);
  return (
    <>
      <header className="header container">
        <div className="header-logo">
          <img src="./img/logo.png" alt="" />
        </div>
        {/* <div className="header-moreInfo">
          <ButtonSe>LOGOUT</ButtonSe>
        </div> */}
        <div className="header-main">
          <div className="header-main__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
            <button className="header-main__search__btn">
              <Search />
            </button>
          </div>
          <div className="header-main__account">
            <img src="./img/logo.png" alt="avatar" />
            {user && (
              <div className="header-main__account__moreinfo">
                <div className="item">
                  <span>Name:</span>
                  <span>{user?.name}</span>
                </div>
                <div className="item">
                  <span>Email:</span>
                  <span>{user?.email}</span>
                </div>
                <ButtonSe onClick={() => dispatch(logoutAction())}>
                  LOGOUT
                </ButtonSe>
              </div>
            )}
            <div className="header-main__account__preview">
              <span>Tài khoản</span>
              <span>{user?.name || "Tên tài khỏan"}</span>
            </div>
          </div>
          <Link className="header-main__cart" to={"/cart"}>
            <CartHeader />
          </Link>

          {/* <div className="header-mobile__menu">
            
        </div> */}
        </div>
        <div className="header-mobile">
          <div className="header-mobile__icon">
            <button ref={iconBarRef} onClick={handleOpenMenuMoible}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="header-mobile__menu" ref={menuRef}>
            <div className="header-mobile__menu__content">
              <ul>
                <li>
                  <a href="/" className="option">
                    Liên Hệ
                  </a>
                </li>
                <li>
                  <a href="/" className="option">
                    Hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="/" className="option">
                    Phản hồi
                  </a>
                </li>
                <li>
                  <a href="/" className="option">
                    Chính sách
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-mobile__control ">
            <div className="header-main__search">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
              <button className="header-main__search__btn">
                <Search />
              </button>
            </div>
            <div className="header-main__cart">
              <CartHeader />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
