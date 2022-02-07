import HelperText from "components/HelperText";
import { User } from "components/Icon";
import { Arrow } from "components/Icon";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { objectToUrlQuery, urlQuery } from "utils/queryUrl";

function SearchFilter(props) {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const url = urlQuery();
  useEffect(() => {
    if (search) {
      navigate(
        `/shop?${objectToUrlQuery({
          ...url,
          name: search,
        })}`
      );
    }
  }, [search]);
  return (
    <>
      <div className="product-list__heading__text">
        <h3 className=" heading">Danh sách sản phẩm</h3>
        <Arrow rotate="-90deg" />
      </div>
      <HelperText
        placeholder="Bạn có có muốn chúng tôi tìm giúp ?"
        Icon={<User />}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            setSearch(e.currentTarget.value);
          }
        }}
      />
    </>
  );
}

export default SearchFilter;
