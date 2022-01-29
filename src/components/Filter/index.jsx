import Rate from "components/Rating";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import "./style.scss";
function Filter({ type = "", field = "Giá tăng dần", rating = 5 }) {
  const [value, setValue] = useState([20, 80]);

  const handleChangeRange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="filter">
      {(type === "rate" || type === "text") && (
        <>
          <input type="checkbox" />
          {type === "rate" && <Rate index={rating} />}
          <span className="filter-field">{field}</span>
        </>
      )}
      {type === "range" && (
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChangeRange}
          valueLabelDisplay="auto"
        />
      )}
    </div>
  );
}

export default Filter;
