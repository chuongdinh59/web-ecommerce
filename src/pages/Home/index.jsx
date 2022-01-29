import CountDown from "components/Countdown";
import Footer from "components/Footer";
import Header from "components/Header";
import Partner from "components/Partner";
import Policy from "components/Policy";
import { ProductList } from "components/Product";
import { ReviewCarousel } from "components/Review";
import Slider from "components/Slider";
import React from "react";
import ColectionPreview from "./Colection";

function Home(props) {
  return (
    <>
      <Header />
      <Slider />
      <Policy />
      <ColectionPreview />
      <ProductList />
      <CountDown />
      <ReviewCarousel />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;
