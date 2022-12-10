import React from "react";

const ModalWindow = ({ content, closePopup }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.className === "popup") closePopup();
      }}
      className="popup"
    >
      <div className="popup_contnet">{content}</div>
    </div>
  );
};

export default ModalWindow;
