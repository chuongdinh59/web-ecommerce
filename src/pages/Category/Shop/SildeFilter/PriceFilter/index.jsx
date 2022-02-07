import { Slider } from "@mui/material";
import HelperText from "components/HelperText";
import { useForm } from "hooks/useForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "utils/numberWithComas";
import { objectToUrlQuery, urlQuery } from "utils/queryUrl";

function PriceFilter(props) {
  const [value, setValue] = useState([0, 50000000]);
  const { form, register, clearForm } = useForm();
  const navigate = useNavigate();
  const handleChangeRange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    if (form?.min || form?.max) {
      navigate(
        `/shop?${objectToUrlQuery({
          ...url,
          minPrice: form?.min || 0,
          maxPrice: form?.max || 50000000,
        })}`
      );
    } else {
      navigate(
        `/shop?${objectToUrlQuery({
          ...url,
          minPrice: value[0],
          maxPrice: value[1],
        })}`
      );
    }
  };
  const url = urlQuery();
  return (
    <div className="filter-price">
      <div className="filter--range">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChangeRange}
          valueLabelDisplay="auto"
          min={0}
          max={50000000}
          step={100000}
        />
      </div>
      <div className="filter-text">
        <span className="title">Min</span>
        <span className="title">Max</span>
      </div>
      <div className="filter-input">
        <HelperText
          placeholder={numberWithCommas(value[0])}
          register={register("min", { required: false })}
        />
        <HelperText
          placeholder={numberWithCommas(value[1])}
          register={register("max", { required: false })}
        />
      </div>
      <div className="filter-price__control">
        <button onClick={handleClick}>Apply</button>
        {/* </Link> */}
        <button
          onClick={() => {
            setValue([0, 50000000]);
            clearForm();
            navigate(
              `/shop?${objectToUrlQuery({
                ...url,
                minPrice: value[0],
                maxPrice: value[1],
              })}`
            );
          }}
        >
          Reset{" "}
        </button>
      </div>
    </div>
  );
}

export default PriceFilter;
