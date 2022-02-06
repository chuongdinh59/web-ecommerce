import ButtonSe from "components/Button/ButtonSe";
import { Times } from "components/Icon";
import { Buy, Eye, Heart } from "components/Icon";
import Rate from "components/Rating";
import { SkeletonList } from "components/SkeletonItem";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { numberWithCommas } from "utils/numberWithComas";
import "./style.scss";

export function ProductList({ data }) {
  const [dataRender, setDataRender] = useState();
  const { loading } = useSelector((store) => store.product);
  console.log(dataRender);
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
    <section className=" container product-list">
      <h5 className="product-list__heading heading">
        Top month Sellers
        <span></span>
      </h5>
      <div className="product-list__field">
        <button
          href="/"
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
      <div className="product-list__card grid grid-col-4 grid grid-col-sm-1 grid-col-md-2">
        {loading ? (
          <SkeletonList />
        ) : (
          dataRender?.map((item) => {
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

      <div className="discovery-more">
        <span className="title">Discovery More</span>
      </div>
    </section>
  );
}

export function Product({ src, name, price, real_price }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {showDetail && (
        <div className="product-list__detail">
          <div className="product-list__detail__wraper">
            <span className="time-btn" onClick={() => setShowDetail(false)}>
              <Times />
            </span>
            <div className="product-list__detail__img">
              <img src={src} alt="product" />
            </div>
            <div className="product-list__detail__info">
              <h3>{name}</h3>
              <Rate index={5} />
              <p>Description Description Description Description Description</p>
              <div className="number">
                <span className="price price--sell">
                  {numberWithCommas(price) + "VND"}
                </span>
                <span className="price price--real">
                  {numberWithCommas(real_price) + "VND"}
                </span>
              </div>
              <div className="product-list__detail__info__btn">
                <ButtonSe>Mua ngay</ButtonSe>
                <ButtonSe bgColor="tagColor" color="white">
                  Yêu thích
                </ButtonSe>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="product">
        <div className="product-img">
          <img src={src} alt="product" />
          <div className="product-img__control">
            <span
              className="product-img__control__btn"
              onClick={() => setShowDetail(true)}
            >
              <Eye />
              <div className="overplay"></div>
            </span>
            <span className="product-img__control__btn">
              <Buy />
              <div className="overplay"></div>
            </span>
            <span className="product-img__control__btn">
              <Heart color="#000" />
              <div className="overplay"></div>
            </span>
          </div>
        </div>
        <div className="product-desc">
          <h5 className="product-desc__name title">{name}</h5>
          <div className="product-desc__price">
            <Rate index={5} />
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
