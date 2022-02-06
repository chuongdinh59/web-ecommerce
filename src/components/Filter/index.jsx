import Rate from "components/Rating";
import React from "react";
import "./style.scss";
function Filter({ type = "", field = "Giá tăng dần", rating = 5 }) {
  return (
    <div className="filter">
      {(type === "rate" || type === "text") && (
        <>
          <input type="checkbox" />
          {/* checked={fieldSort === field} */}
          {type === "rate" && <Rate index={rating} />}
          <span className="filter-field">{field}</span>
        </>
      )}
    </div>
  );
}

export default Filter;
