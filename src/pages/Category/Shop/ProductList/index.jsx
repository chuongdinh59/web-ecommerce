import Paginate from "components/Paginate";
import { Product } from "components/Product";
import React from "react";
function ProductList(props) {
  return (
    <div className="product-list">
      <div
        className="product-list__main grid-col-4
       grid-col-md-3 grid grid-col-sm-2"
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Paginate />
    </div>
  );
}

export default ProductList;
