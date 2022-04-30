import HelperText from "components/HelperText";
import { Lock, User } from "components/Icon";
import { useForm } from "hooks/useForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchLoginAction } from "redux/actions/user";

const LoginForm = ({ toggle }) => {
  const { login } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, form, validate, error } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    const errorObject = validate();
    if (Object.keys(errorObject).length === 0) {
      dispatch(fetchLoginAction(form));
    }
  };
  useEffect(() => {
    if (login) navigate(-1);
    return;
  }, [login]);
  return (
    <>
      <form className="auth-form sign-in" onSubmit={onSubmit}>
        <HelperText
          Icon={<User />}
          placeholder={"Username"}
          register={register(
            "username",
            {
              required: true,
            },
            {
              required: "*Username là bắt buộc",
            }
          )}
          error={error}
          name="username"
        />
        <HelperText
          Icon={<Lock />}
          placeholder={"Password"}
          type="password"
          register={register(
            "password",
            {
              required: true,
              // pattern: "password",
            },
            {
              required: "*Password là bắt buộc",
              // pattern: "Password không hợp lệ",
            }
          )}
          error={error}
          name="password"
        />
        <button className="auth-btn">Sign in</button>
        <p>
          <span>Already have an account?</span>
          <b onClick={toggle}>Sign up here</b>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
