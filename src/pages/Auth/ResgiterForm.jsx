import HelperText from "components/HelperText";
import { Email } from "components/Icon";
import { Lock, User } from "components/Icon";
import { useForm } from "hooks/useForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterAction } from "redux/actions/user";

const ResgiterForm = ({ toggle }) => {
  const { register, form, validate, error, clearForm } = useForm();
  const { registerErr, registerSuccess } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const errorObject = validate();
    if (Object.keys(errorObject).length === 0) {
      dispatch(fetchRegisterAction(form));
    }
  };

  useEffect(() => {
    if (!!registerSuccess) {
      toggle();
    }
    if (!!registerErr) {
      alert(registerErr);
      clearForm();
    }
  }, [registerSuccess, registerErr]);

  return (
    <>
      <form className="auth-form sign-up" onSubmit={onSubmit}>
        <HelperText
          Icon={<User />}
          placeholder={"Username"}
          register={register(
            "username",
            {
              required: true,
            },
            {
              required: "Username là bắt buộc",
            }
          )}
          error={error}
          name="username"
        />
        <HelperText
          Icon={<Email />}
          placeholder={"Email"}
          type="text"
          register={register(
            "name",
            {
              required: true,
              pattern: "email",
            },
            {
              required: "Email là bắt buộc",
              pattern: "Email không hợp lệ",
            }
          )}
          error={error}
          name="name"
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
              required: "Password là bắt buộc",
              // pattern: "Password không hợp lệ",
            }
          )}
          error={error}
          name="password"
        />
        <HelperText
          Icon={<Lock />}
          placeholder={"Confirm password"}
          type="password"
          register={register(
            "passwordConfirm",
            {
              required: true,
              pattern: "confirm_password",
            },
            {
              required: "Password là bắt buộc",
              pattern: "Password không trùng khớp",
            }
          )}
          error={error}
          name="passwordConfirm"
        />
        <button className="auth-btn">Sign in</button>
        <p>
          <span>Already have an account?</span>
          <b onClick={toggle}>Sign in here</b>
        </p>
      </form>
    </>
  );
};

export default ResgiterForm;
