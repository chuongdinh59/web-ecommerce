import { Arrow } from "components/Icon";
import { Product } from "components/Product";
import { API } from "constant";
import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import { loadingProductAction } from "redux/actions/product";
import "./style.scss";
function BestSeller(props) {
  const [dataRender, setDataRender] = useState();
  const flickityOptions = {
    initialIndex: 0,
    groupCells: 1,
    setGallerySize: true,
    prevNextButtons: false,
  };
  const fetchSeller = async () => {
    const res = await fetch(`${API}/product?limit=5&categories=1846`).then(
      (res) => res.json()
    );
    setDataRender(res.data);
  };
  useEffect(() => {
    fetchSeller();
  }, []);
  return (
    <section className="best-seller">
      <div className="container">
        <div className="best-seller__heading">
          <h3 className=" heading">Best Seller</h3>
          <Arrow rotate="-90deg" />
        </div>
        {/* grid grid-col-4 grid-col-sm-2 grid-col-md-3 */}
        <div className="best-seller__list grid grid-col-5 grid-col-sm-2 grid-col-md-3  ">
          {dataRender &&
            dataRender?.map((item) => {
              return (
                <Product
                  id={item._id}
                  key={item._id}
                  src={item?.images[0]?.thumbnail_url}
                  name={item?.name}
                  price={item?.price}
                  defaultPrice={item?.price}
                  real_price={item?.real_price}
                  shortdesc={item?.short_description}
                  rating={item?.rating_average}
                  slug={item?.slug}
                  item={item}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
