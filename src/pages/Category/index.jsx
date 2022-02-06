import CountDown from "components/Countdown";
import Partner from "components/Partner";
import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestToday";
import Shop from "./Shop";

function Category(props) {
  return (
    <>
      <Banner />
      <BestSeller />
      <CountDown />
      <Shop />
      <Partner />
    </>
  );
}

export default Category;
