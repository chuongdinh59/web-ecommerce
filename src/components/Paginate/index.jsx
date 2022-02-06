import { Arrow } from "components/Icon";
import React from "react";
import { Link } from "react-router-dom";
import { objectToUrlQuery, urlQueryToObject } from "utils/queryUrl";
import "./style.scss";
function Paginate({ totalPage = 5 }) {
  const urlQuery = () => {
    var search = window.location.search.substring(1);
    return !search
      ? {}
      : JSON.parse(
          '{"' +
            decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
            '"}'
        );
  };
  let queryUrl = urlQuery();

  let currentPage =
    parseInt(urlQueryToObject(window.location.search.substring(1)).page) || 1;

  const renderPaginate = () => {
    const listPageRender = [];
    let start = currentPage - 2 > 0 ? currentPage - 2 : 1;
    let end = start + 4;
    for (let i = start; i <= end; i++) {
      queryUrl.page = i;
      let strUrl = objectToUrlQuery(queryUrl);
      listPageRender.push(
        <li className={`${i === currentPage ? "active" : " "}`} key={i}>
          <Link to={`/shop?${strUrl}`}>{i}</Link>
        </li>
      );
    }
    return listPageRender;
  };

  return (
    <ul className="paginate">
      <Link
        to={`/shop?${objectToUrlQuery({
          ...queryUrl,
          page: currentPage - 1,
        })}`}
        className={`paginate-btn pre ${currentPage === 1 && "disable"}`}
      >
        <Arrow rotate="90deg" />
      </Link>
      {renderPaginate()}
      <Link
        to={`/shop?${objectToUrlQuery({
          ...queryUrl,
          page: currentPage + 1,
        })}`}
        className="paginate-btn next"
        onClick={() => {
          console.log(10);
        }}
      >
        <Arrow rotate="-90deg" />
      </Link>
    </ul>
  );
}

export default Paginate;
