import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseErrorLoginAction } from "redux/actions/user";
import SnackBar from "..";

function SnackBarLogin(props) {
  const { loginErr } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(CloseErrorLoginAction({}));
  };
  return <SnackBar open={loginErr} handleClose={handleClose} />;
}

export default SnackBarLogin;
