import React from "react";
import classNames from "classnames";
import "./style.scss";
function ButtonSe({ children, color, size = "medium", bgColor = "blue" }) {
  return (
    <button
      className={classNames(
        `buy-btn color-${color} bg-${bgColor} buy-btn-size-${size} `
      )}
    >
      {children}
    </button>
  );
}

export default ButtonSe;
