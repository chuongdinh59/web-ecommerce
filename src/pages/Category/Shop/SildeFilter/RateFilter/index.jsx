import Filter from "components/Filter";
import React from "react";

function RateFilter(props) {
  return (
    <ul className="shop-side__category">
      <li>
        <label>
          <Filter type="rate" rating={5} field="5 sao" />
        </label>
      </li>
      <li>
        <label>
          <Filter type="rate" rating={4} field="4 sao" />
        </label>
      </li>
      <li>
        <label>
          <Filter type="rate" rating={3} field="3 sao" />
        </label>
      </li>
      <li>
        <label>
          <Filter type="rate" rating={2} field="2 sao" />
        </label>
      </li>
      <li>
        <label>
          <Filter type="rate" rating={1} field="1 sao" />
        </label>
      </li>
    </ul>
  );
}

export default RateFilter;
