import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusCartAction } from "redux/actions/cart";
import SnackBar from "..";

function SnackBarCart(props) {
  const { status } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setStatusCartAction({}));
  };
  return <SnackBar open={status} handleClose={handleClose} />;
}

export default SnackBarCart;
