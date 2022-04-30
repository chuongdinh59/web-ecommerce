import { Rating } from "@mui/material";
import { Times } from "components/Icon";
import Tag from "components/Tag";
import React from "react";
import { useDispatch } from "react-redux";
import { removeWishListAction } from "redux/actions/user";
import { numberWithCommas } from "utils/numberWithComas";

function WishItem(props) {
  const {
    _id,
    name,
    price,
    real_price,
    thumbnail_url,
    rating_average,
    review_count,
    discount_rate,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="wishitem">
      <div
        className="wishitem-delete pointer"
        onClick={() => dispatch(removeWishListAction(_id))}
      >
        <Times />
      </div>
      <div className="wishitem-content">
        <div className="wishitem-img">
          <img src={thumbnail_url} alt="" />
        </div>
        <div className="wishitem-info">
          <h4 className="title">{name || "product title"}</h4>
          <Rating value={rating_average || 5} precision={0.5} readOnly />
          <p>( {review_count || 0} nhận xét)</p>
        </div>
      </div>
      <div className="wishitem-price">
        <span className="price--real price">
          {numberWithCommas(real_price || 0)}
        </span>
        <div className="price-second">
          <span className="price price--sell">
            {numberWithCommas(price || 0)}
          </span>
          <Tag content={discount_rate + "%"} color="red" size="medium" />
        </div>
      </div>
    </div>
  );
}

export default WishItem;
