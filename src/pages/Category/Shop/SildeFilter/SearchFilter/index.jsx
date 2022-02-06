import HelperText from "components/HelperText";
import { User } from "components/Icon";
import { Arrow } from "components/Icon";
import React from "react";

function SearchFilter(props) {
  return (
    <>
      <div className="product-list__heading__text">
        <h3 className=" heading">Danh sách sản phẩm</h3>
        <Arrow rotate="-90deg" />
      </div>
      <HelperText
        placeholder="Bạn có có muốn chúng tôi tìm giúp ?"
        Icon={<User />}
      />
    </>
  );
}

export default SearchFilter;
