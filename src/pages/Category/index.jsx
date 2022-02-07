import CountDown from "components/Countdown";
import Helmet from "components/Helmet";
import Partner from "components/Partner";
import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestToday";
import Shop from "./Shop";

function Category(props) {
  return (
    <Helmet title="Shop">
      <Banner />
      <BestSeller />
      <CountDown />
      <Shop />
      <Partner />
    </Helmet>
  );
}

export default Category;
