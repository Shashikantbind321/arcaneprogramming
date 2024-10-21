// PopupModal.js
import React from "react";
import "./PopupModal.css";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close'; 

const PopupModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>Offer Now</h3>
          <button className="close-button" onClick={closeModal} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <div className="popup-body">
          <div className="popup-info">
            <p>
              <strong>
                Welcome Arcane Programming Infotech
              </strong>
            </p>
            <p>
              <strong>Training institute</strong>
            </p>
          </div>
          <div className="popup-footer">
            <p>Best Academics, Best Placement</p>
            <Link to="/registration" onClick={closeModal}>
              <button className="register-button">Registration Open</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
