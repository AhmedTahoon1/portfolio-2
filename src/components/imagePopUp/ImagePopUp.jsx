import React from "react";
import "./imagepopup.scss";
const ImagePopUp = ({ imageUrl, closeModal }) => {
  return (
    <div className="image-modal" onClick={closeModal}>
      <div className="image-modal-container">
        <img className="image-modal-icon" src={imageUrl || ""} alt="none" />
      </div>
    </div>
  );
};

export default ImagePopUp;
