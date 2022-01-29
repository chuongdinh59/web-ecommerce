import Filter from "components/Filter";
import HelperText from "components/HelperText";
import { Gird } from "components/Icon";
import { Section } from "components/Icon";
import { Arrow, User } from "components/Icon";
import React from "react";
import ProductList from "./ProductList";
import "./style.scss";
function Shop(props) {
  return (
    <section className="shop">
      <div className="container product-list__heading">
        <div className="product-list__heading__text">
          <h3 className=" heading">Danh sách sản phẩm</h3>
          <Arrow rotate="-90deg" />
        </div>
        <HelperText
          placeholder="Bạn có có muốn chúng tôi tìm giúp ?"
          Icon={<User />}
        />
      </div>

      <div className="container shop-side__second">
        <div className="shop-side__second__category">
          <ul>
            <li>Đồ gia dụng</li>
            <li>Đồ gia dụng</li>
            <li>Đồ gia dụng</li>
            <li>Đồ gia dụng</li>
            <li>Đồ gia dụng</li>
          </ul>
          <div className="option__filter">
            <select>
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
              <option>Đánh giá cao đến thấp</option>
              <option>Đánh giá thấp đến cao</option>
            </select>
            <span>
              <Arrow />
            </span>
          </div>
        </div>
      </div>
      <div className="view container">
        <div className="view-main">
          <div className="view-grid view-item">
            <Gird /> <span className="title">Grid view</span>
          </div>
          <div className="view-list view-item">
            <Section /> <span className="title">List view</span>
          </div>
        </div>
        <div className="sort">
          <h3 className="title">Sắp xếp: </h3>
          <label>
            <Filter type="text" content="Giá tăng dần" />
          </label>
          <label>
            <Filter type="text" content="Giá giảm dần" />
          </label>
        </div>
      </div>
      <div className="container shop-container grid grid-col-sm-1">
        <div className="shop-side">
          <h3 className="title">Danh mục sản phẩm</h3>
          <ul className="shop-side__category">
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
            <li className="category__item title">Thiết bị điện tử</li>
          </ul>

          <h3 className="title">Đánh giá</h3>
          <ul className="shop-side__category">
            <li>
              <label>
                <Filter type="rate" rating={5} field="5 sao" />
              </label>
            </li>
            <li>
              <label>
                <Filter type="rate" rating={4} field="4 sao" />
              </label>
            </li>
            <li>
              <label>
                <Filter type="rate" rating={3} field="3 sao" />
              </label>
            </li>
            <li>
              <label>
                <Filter type="rate" rating={2} field="2 sao" />
              </label>
            </li>
            <li>
              <label>
                <Filter type="rate" rating={1} field="1 sao" />
              </label>
            </li>
          </ul>
          <h3 className="title">Khoảng giá</h3>
          <div className="filter-price">
            <div className="filter--range">
              <Filter type="range" />
            </div>
            <div className="filter-input">
              <div>
                <p>Min</p>
                <HelperText />
              </div>
              <div>
                <p>Max</p>
                <HelperText />
              </div>
            </div>
            <div className="filter-price__control">
              <button>Apply</button>
              <button>Reset </button>
            </div>
          </div>
        </div>
        <div className="shop-main">
          <ProductList />
        </div>
      </div>
    </section>
  );
}

export default Shop;
