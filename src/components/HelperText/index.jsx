import React from "react";
import "./style.scss";
function HelperText({
  Icon,
  type = "text",
  placeholder,
  register = null,
  error = null,
  name,
}) {
  return (
    <>
      {error && <span className="error-text">{error[name]}</span>}
      <div className="help">
        <input type={type} placeholder={placeholder} {...register} />
        <span className="help-icon">{Icon}</span>
      </div>
    </>
  );
}

export default HelperText;
