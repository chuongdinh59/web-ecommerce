import { Snackbar } from "@mui/material";
import CountDown from "components/Countdown";
import Helmet from "components/Helmet";
import Partner from "components/Partner";
import Policy from "components/Policy";
import { ProductList } from "components/Product";
import { ReviewCarousel } from "components/Review";
import Slider from "components/Slider";
import SnackBar from "components/SnackBar";
import { API } from "constant";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <Helmet title="Trang chủ">
      <Slider />
      <Policy />
      <ColectionPreview />
      <ProductList data={data} />
      <CountDown />
      <ReviewCarousel />
      <Partner />
      <SnackBar />
    </Helmet>
  );
}

export default Home;
