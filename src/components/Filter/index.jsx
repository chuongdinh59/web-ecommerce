import Rate from "components/Rating";
import React from "react";
import "./style.scss";
function Filter({
  type = "",
  field = "Giá tăng dần",
  rating = 5,
  register,
  checked,
  disable,
  ...params
}) {
  return (
    <div className="filter">
      {(type === "rate" || type === "text") && (
        <>
          <input type="checkbox" {...register} {...params} />
          {type === "rate" && <Rate index={rating} />}
          <span className="filter-field">{field}</span>
        </>
      )}
      {type === "radio" && (
        <>
          {checked ? (
            <input type="radio" checked={checked} name={type} {...register} />
          ) : (
            <input type="radio" name={type} {...register} />
          )}
          <span className="filter-field">{field}</span>
        </>
      )}
    </div>
  );
}

export default Filter;
