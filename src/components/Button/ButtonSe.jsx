import React from "react";
import classNames from "classnames";
import "./style.scss";
function ButtonSe({
  children,
  color,
  size = "medium",
  bgColor = "green1",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        `buy-btn color-${color} bg-${bgColor} buy-btn-size-${size} `
      )}
    >
      {children}
    </button>
  );
}

export default ButtonSe;
