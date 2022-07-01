import React from "react";
import "../Cofirm Modal/ConfirmModal.css";
const ConfirmLogOutModal = ({
  takeLoginState,
  setIsConfirmLogOutModalVisible,
}) => {
  return (
    <div className="confirm-modal-wrapper fadeIn">
      <div className="confirm-modal-container">
        <img
          className="confirm-modal-img"
          src="https://cdn-icons-png.flaticon.com/512/6518/6518455.png"
          alt=""
        />
        <h2 className="confirm-modal-title">Are you sure?</h2>
        <p className="confirm-modal-description">Don't leave me</p>
        <div className="confirm-modal-button-container">
          <button
            onClick={() => {
              setIsConfirmLogOutModalVisible(false);
            }}
            className="confirm-btn"
            type="submit"
          >
            Nope
          </button>
          <button
            onClick={() => {
              setIsConfirmLogOutModalVisible(false);
              takeLoginState(false);
              const loggedIn = 0;
              localStorage.setItem("loggedIn", loggedIn);
            }}
            className="confirm-btn"
            type="submit"
          >
            <i class="fa-solid fa-burst"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogOutModal;
