import CartHeader from "components/CartHeader";
import { Search } from "components/Icon";
import React, { useRef } from "react";
import "./style.scss";
function Header(props) {
  const iconBarRef = useRef();
  const menuRef = useRef();
  const handleOpenMenuMoible = () => {
    iconBarRef.current.classList.toggle("on");
    menuRef.current.classList.toggle("on");
  };

  return (
    <>
      <header className="header container">
        <div className="header-logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="header-main">
          <div className="header-main__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
            <button className="header-main__search__btn">
              <Search />
            </button>
          </div>
          <div className="header-main__account">
            <img src="./img/avatar.png" alt="avatar" />
            <div className="header-main__account__preview">
              <span>Tài khoản</span>
              <span>Đình Chương</span>
            </div>
          </div>
          <div className="header-main__cart">
            <CartHeader />
          </div>

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
