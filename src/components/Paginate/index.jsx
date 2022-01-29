import { Arrow } from "components/Icon";
import React from "react";
import "./style.scss";
function Paginate({ totalPage = 5 }) {
  const renderPaginate = () => {
    const currentPage = 1;
    const listPageRender = [];
    let start = currentPage - 2 > 0 ? currentPage - 2 : 1;
    let end = start + 4;
    for (let i = start; i <= end; i++) {
      listPageRender.push(
        <li className={`${i === currentPage ? "active" : " "}`} key={i}>
          {i}
        </li>
      );
    }
    return listPageRender;
  };

  return (
    <ul className="paginate">
      <button className="paginate-btn pre disable">
        <Arrow rotate="90deg" />
      </button>
      {renderPaginate()}
      <button className="paginate-btn next">
        <Arrow rotate="-90deg" />
      </button>
    </ul>
  );
}

export default Paginate;
