import CountDown from "components/Countdown";
import Footer from "components/Footer";
import Header from "components/Header";
import Partner from "components/Partner";
import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestToday";
import Shop from "./Shop";

function Category(props) {
  return (
    <>
      <Header />
      <Banner />
      <BestSeller />
      <CountDown />
      <Shop />
      <Partner />
      <Footer />
    </>
  );
}

export default Category;
