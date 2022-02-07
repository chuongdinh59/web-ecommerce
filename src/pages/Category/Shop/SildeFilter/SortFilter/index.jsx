import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { objectToUrlQuery, urlQuery } from "utils/queryUrl";

function SortFilter(props) {
  const [sort, setSort] = useState();
  const navigate = useNavigate();
  const content = [
    {
      sort: "real_price.asc",
      con: "Giá tăng dần",
    },
    {
      sort: "real_price.desc",
      con: "Giá giảm dần",
    },
  ];
  const url = urlQuery();
  useEffect(() => {
    if (!sort?.sort) {
      delete url?.sort;
      const strUrl = objectToUrlQuery(url);
      navigate(`/shop?${strUrl}`);
    }
  }, [sort]);

  return (
    <div className="sort">
      <h3 className="title">Sắp xếp: </h3>
      {/* <label>
        <Filter type="text" field="Giá tăng dần" />
      </label>
      <label>
        <Filter type="text" field="Giá giảm dần" />
      </label> */}
      {content.map((item, index) => {
        url.sort = item.sort;
        const strUrl = objectToUrlQuery(url);
        return (
          <Link
            key={index}
            className={`${item.sort === sort?.sort ? "active" : ""}`}
            to={`/shop?${strUrl}`}
            onClick={() => {
              if (item.sort === sort?.sort) {
                setSort({
                  sort: "",
                  content: "",
                });
              } else {
                setSort(item);
              }
            }}
          >
            <input
              type="checkbox"
              checked={item.sort === sort?.sort || false}
              onChange={() => {}}
            />
            <span>{item.con}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default SortFilter;
