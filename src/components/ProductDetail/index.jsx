import { Rating } from "@mui/material";
import Comment from "components/Comments";
import Helmet from "components/Helmet";
import { Loader } from "components/Icon";
import BestSeller from "pages/Category/BestToday";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCartAction } from "redux/actions/cart";
import { fetchDetailProductAction } from "redux/actions/product";
import { addWishListAction } from "redux/actions/user";
import { numberWithCommas } from "utils/numberWithComas";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag";
import "./style.scss";
function ProductDetail(props) {
  const { slug } = useParams();
  const { productDetail, loading } = useSelector((store) => store.product);
  let productItem = productDetail[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist, login } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(fetchDetailProductAction(slug));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Helmet title="Sản phẩm">
      <section className="product-detail  container">
        <div className="product-detail__wrapper">
          <div className="product-detail__img">
            <img src={productItem?.thumbnail_url} alt="" />
          </div>
          <div className="product-detail__info">
            <h3 className="product-detail__info__name title">
              {productItem?.name}
            </h3>
            <Rating
              value={productItem?.rating_average || 0}
              precision={0.5}
              readOnly
            />
            <span>(Xem {productItem?.discount_rate} đánh giá)</span>
            <div className="product-detail__info__price">
              <div className="price--real">
                {numberWithCommas(productItem?.real_price)}
              </div>
              <div className="sale">
                <span className="price--sell">
                  {numberWithCommas(productItem?.price)}
                </span>
                <Tag
                  color="red"
                  size="medium"
                  content={productItem?.discount_rate + "%"}
                />
              </div>
            </div>
            <div className="product-detail__info__address">
              <p>Giao đến:</p>
              <a href="!">H. Cần Giờ, X. Tam Thôn Hiệp, Hồ Chí Minh</a>
              <a href="!" className="change-address">
                Đổi địa chỉ
              </a>
            </div>
            <p className="product-detail__info__shortdesc">
              {productItem?.short_description}
            </p>
            <div className="product-detail__info__btn">
              <div className="btn-control">
                <button
                  className="buy"
                  onClick={() => {
                    if (!login) {
                      navigate("/login");
                      return;
                    }
                    dispatch(getCartAction({ ...productItem, number: 1 }));
                  }}
                >
                  Chọn mua
                </button>
                <button
                  className="wishlist"
                  onClick={() => {
                    if (!login) {
                      navigate("/login");
                      return;
                    }
                    dispatch(addWishListAction({ ...productItem, wishlist }));
                  }}
                >
                  Yêu thích
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="product-detail__desc"
          dangerouslySetInnerHTML={{ __html: productItem?.description }}
        ></div>
        <button
          onClick={(e) => {
            if (!e.currentTarget.classList.contains("show-content")) {
              e.currentTarget.textContent = "Xem ít hơn ...";
            }
            e.currentTarget.previousElementSibling.classList.toggle(
              "show-content"
            );
          }}
        >
          Xem thêm...
        </button>
        <Comment />
      </section>
      <BestSeller />
    </Helmet>
  );
}

export default ProductDetail;
