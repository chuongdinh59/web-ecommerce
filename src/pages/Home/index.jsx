import CountDown from "components/Countdown";
import Partner from "components/Partner";
import Policy from "components/Policy";
import { ProductList } from "components/Product";
import { ReviewCarousel } from "components/Review";
import Slider from "components/Slider";
import { API } from "constant";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { loadingProductAction } from "redux/actions/product";
import ColectionPreview from "./Colection";

function Home(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const loadingHome = async () => {
    const res1 = await fetch(`${API}/product?categories=1789`).then((res) =>
      res.json()
    );
    const res2 = await fetch(`${API}/product?categories=1815`).then((res) =>
      res.json()
    );
    const res3 = await fetch(`${API}/product?categories=1801`).then((res) =>
      res.json()
    );
    setData({
      res1,
      res2,
      res3,
    });
    dispatch(loadingProductAction(false));
  };
  useEffect(() => {
    loadingHome();
  }, []);

  return (
    <>
      <Slider />
      <Policy />
      <ColectionPreview />
      <ProductList data={data} />
      <CountDown />
      <ReviewCarousel />
      <Partner />
    </>
  );
}

export default Home;
