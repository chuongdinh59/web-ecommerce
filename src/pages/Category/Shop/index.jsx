import { Arrow, Gird, Section } from "components/Icon";
import Paginate from "components/Paginate";
import { Product } from "components/Product";
import { SkeletonList } from "components/SkeletonItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchCategoryAction, fetchProductAction } from "redux/actions/product";
import { objectToUrlQuery, urlQuery } from "utils/queryUrl";
import PriceFilter from "./SildeFilter/PriceFilter";
import RateFilter from "./SildeFilter/RateFilter";
import SearchFilter from "./SildeFilter/SearchFilter";
import SortFilter from "./SildeFilter/SortFilter";
import "./style.scss";
function Shop(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productlist, category, loading } = useSelector(
    (store) => store.product
  );

  const objUrl = useLocation();

  useEffect(() => {
    dispatch(fetchCategoryAction());
  }, []);

  useEffect(() => {
    dispatch(fetchProductAction(objUrl.search));
  }, [objUrl.search]);

  return (
    <section className="shop">
      <div className="container product-list__heading">
        <SearchFilter />
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
        <SortFilter />
      </div>
      <div className="container shop-container grid grid-col-sm-1">
        <div className="shop-side">
          <h3 className="title">Danh mục sản phẩm</h3>
          <ul className="shop-side__category">
            <li
              className="category__item title"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Tất cả
            </li>
            {category &&
              category?.map((item) => {
                const url = urlQuery();
                url.page = 1;
                url.categories = item?.id;
                const strURL = objectToUrlQuery(url);
                return (
                  <Link to={`/shop?${strURL}`}>
                    <li key={item._id} className="category__item title">
                      {item.title}
                    </li>
                  </Link>
                );
              })}
          </ul>
          <h3 className="title">Đánh giá</h3>
          <RateFilter />
          <h3 className="title">Khoảng giá</h3>
          <PriceFilter />
        </div>
        <div className="shop-main grid grid-col-3">
          {loading || !productlist ? (
            <SkeletonList length={15} />
          ) : (
            productlist?.map((item) => {
              return (
                <Product
                  key={item._id}
                  src={item?.images[0]?.thumbnail_url}
                  name={item?.name}
                  price={item?.price}
                  real_price={item?.real_price}
                />
              );
            })
          )}
        </div>
      </div>
      <Paginate />
    </section>
  );
}

export default Shop;
