import React from "react";
import "./style.scss";
import classNames from "classnames";
function Tag({ content = "33%", bg = "default", size, color }) {
  return (
    <div
      className={classNames(
        `tag tag-bg__${bg} tag-size__${size} tag-color__${color}`
      )}
    >
      {content}
    </div>
  );
}

export default Tag;
