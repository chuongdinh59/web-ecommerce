import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import WishItem from "./WishItem";
function WishList(props) {
  const refClass = useRef();
  const { wishlist } = useSelector((store) => store.user);
  useEffect(() => {
    const timeId = setTimeout(() => {
      refClass.current.classList.add("active");
    }, 200);
    // return clearTimeout(timeId);
  }, []);
  return (
    <div className="wishlist " ref={refClass}>
      <div className="wishlist-list grid grid-col-1">
        {wishlist?.length > 0 ? (
          wishlist.map((item, index) => {
            return <WishItem key={index} {...item?.product} />;
          })
        ) : (
          <img src="../img/emptycart.png" alt="emptycart" />
        )}
      </div>
    </div>
  );
}

export default WishList;
