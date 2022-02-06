import { useState } from "react";

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const passwordRegexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
export const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);
  const [error, setError] = useState({});

  const rules = {};
  const messages = {};

  const onChange = (name) => (ev) => {
    let value = ev.currentTarget.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const errorOBject = {};
    for (let i in rules) {
      const r = rules[i];
      const m = messages[i];

      if (r.required && !form[i]) {
        errorOBject[i] = m?.required || `${i} là bắt buộc`;
        continue;
      }

      if (r.pattern) {
        let pattern = r.pattern;
        if (pattern === "email") {
          pattern = emailRegexp;
        }
        if (pattern === "phone") {
          pattern = phoneRegexp;
        }
        if (pattern === "password") {
          pattern = passwordRegexp;
        }
        if (pattern === "confirm_password") {
          if (form["passwordConfirm"] !== form["password"]) {
            errorOBject[i] = m?.pattern || `${i} không trùng khớp`;
          }
        }
        if (pattern !== "confirm_password" && !pattern.test(form[i])) {
          errorOBject[i] = m?.pattern || `${i} không đúng định dạng`;
        }
      }
    }
    setError(errorOBject);

    return errorOBject;
  };

  const register = (name, option = {}, message = {}) => {
    rules[name] = option;

    messages[name] = message;

    return {
      name,
      onChange: onChange(name),
      value: form[name],
    };
  };
  const clearForm = () => {
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });
  };
  const handleSubmit = (submitFun) => {
    return (ev) => {
      ev.preventDefault();
      const errorOBject = validate();
      if (Object.keys(errorOBject).length === 0) {
        submitFun(form);
      }
    };
  };

  return {
    register,
    handleSubmit,
    error,
    form,
    setForm,
    validate,
    rules,
    clearForm,
  };
};
