import { Rating, Snackbar } from "@mui/material";
import { Buy, Eye, Heart } from "components/Icon";
import { SkeletonList } from "components/SkeletonItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getCartAction } from "redux/actions/cart";
import { setModalProductAction } from "redux/actions/modal";
import { addWishListAction } from "redux/actions/user";
import { numberWithCommas } from "utils/numberWithComas";
import "./style.scss";
export function ProductList({ data }) {
  const [dataRender, setDataRender] = useState();
  const { loading } = useSelector((store) => store.product);
  useEffect(() => {
    setDataRender(data?.res1.data);
  }, [data]);
  function handleRender(e, items) {
    document
      .querySelector(".product-list__field__tab.active")
      .classList.remove("active");
    e.currentTarget.classList.add("active");
    setDataRender(items);
  }
  return (
    <>
      <section className=" container product-list">
        <h5 className="product-list__heading heading">
          Top month Sellers
          <span></span>
        </h5>
        <div className="product-list__field">
          <button
            className="title product-list__field__tab active"
            onClick={(e) => {
              handleRender(e, data?.res1?.data);
            }}
          >
            Smart Phone
          </button>
          <button
            href="/"
            className="title product-list__field__tab"
            onClick={(e) => {
              handleRender(e, data?.res2?.data);
            }}
          >
            Hàng Quốc Tế
          </button>
          <button
            href="/"
            className="title product-list__field__tab"
            onClick={(e) => {
              handleRender(e, data?.res3?.data);
            }}
          >
            Camera
          </button>
        </div>
        {/* grid grid-col-4 grid grid-col-sm-1 grid-col-md-2 */}
        <div className="product-list__card grid grid-col-4 grid grid-col-sm-1 grid-col-md-2">
          {loading ? (
            <SkeletonList />
          ) : (
            dataRender?.map((item) => {
              return (
                <Product
                  key={item?._id}
                  id={item?._id}
                  src={item?.images[0]?.thumbnail_url}
                  name={item?.name}
                  price={item?.price}
                  defaultPrice={item?.real_price}
                  real_price={item?.real_price}
                  shortdesc={item?.short_description}
                  rating={item?.rating_average}
                  slug={item?.slug}
                  item={item}
                />
              );
            })
          )}
        </div>
        <div className="discovery-more">
          <span className="title">Discovery More</span>
        </div>
      </section>
    </>
  );
}

export function Product(props) {
  const { id, src, name, price, real_price, shortdesc, rating, slug, item } =
    props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist, login } = useSelector((store) => store.user);
  const { view } = useSelector((store) => store.product);
  const handleCart = () => {
    if (!login) {
      navigate("/login");
      return;
    }
    dispatch(getCartAction({ ...props, number: 1 }));
  };
  return (
    <>
      <div className={`product ${view === "grid" ? "grid-view" : ""} ${id}`}>
        <div className="product-img">
          <Link to={`/${slug}`}>
            <img src={src} alt="product" />
          </Link>
          <div className="product-img__control">
            <span
              className="product-img__control__btn"
              // onClick={() => setShowDetail(true)}
              onClick={() => dispatch(setModalProductAction(props))}
            >
              <Eye />
              <div className="overplay"></div>
            </span>
            <span className="product-img__control__btn" onClick={handleCart}>
              <Buy />
              <div className="overplay"></div>
            </span>
            <span
              className="product-img__control__btn pointer"
              onClick={() => {
                if (!login) {
                  navigate("/login");
                  return;
                }
                dispatch(addWishListAction({ item, wishlist }));
              }}
            >
              <Heart color="#000" />
              <div className="overplay"></div>
            </span>
          </div>
        </div>
        <div className="product-desc">
          <h5 className="product-desc__name title">{name}</h5>
          <p className="product-desc__content">{shortdesc}</p>
          <div className="product-desc__price">
            <Rating value={rating} precision={0.5} readOnly />
            <div className="number">
              <span className="price price--sell">
                {numberWithCommas(price) + "VND"}
              </span>
              <span className="price price--real">
                {numberWithCommas(real_price) + "VND"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
