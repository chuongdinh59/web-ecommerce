import React from "react";
import "./style.scss";
function HelperText({ Icon, type = "text", placeholder }) {
  return (
    <>
      <div className="help">
        <input type={type} placeholder={placeholder} />
        <span className="help-icon">{Icon}</span>
      </div>
    </>
  );
}

export default HelperText;
