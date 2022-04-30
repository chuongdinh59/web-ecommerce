import React, { useEffect } from "react";
import { Times } from "components/Icon";
import ReactDOM from "react-dom";
import "./style.scss";
import { Warning } from "components/Icon";
import { Sucsess } from "components/Icon";
import { useRef } from "react";

function SnackBar({ open, handleClose }) {
  useEffect(() => {
    if (!!open?.content) {
      const id = setTimeout(() => {
        handleClose();
      }, 2000);
      return () => clearTimeout(id);
    }
  }, [open?.content]);
  return open && !!open?.type
    ? ReactDOM.createPortal(
        <div
          className={`snackbar ${
            open?.type === "warning" ? "warning" : "success"
          } ${open && "open"}`}
        >
          <div className="snackbar-delete pointer" onClick={handleClose}>
            <Times />
          </div>
          <div className="snackbar-img">
            {open?.type === "warning" ? <Warning /> : <Sucsess />}
          </div>
          <div className="snackbar-status">{open?.content}</div>
        </div>,
        document.querySelector("body")
      )
    : "";
}

export default SnackBar;
