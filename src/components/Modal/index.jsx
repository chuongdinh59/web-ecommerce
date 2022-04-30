import { Times } from "components/Icon";
import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
function Modal({ children, open, handleClose = () => {} }) {
  if (typeof document === undefined) {
    return <div className="modal"></div>;
  }
  return ReactDOM.createPortal(
    <div className={`modal ${open ? "is-visible" : ""}`}>
      <div className="modal-overplay" onClick={handleClose}></div>
      <div className="modal-main">
        <div className="modal-close" onClick={handleClose}>
          <Times />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.querySelector("body")
  );
}
export default Modal;
