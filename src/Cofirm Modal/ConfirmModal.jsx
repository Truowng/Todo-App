import React from "react";
import "./ConfirmModal.css";
const ConfirmModal = ({
  setIsConfirmModalVisible,
  handleOnDelete,
  id,
  takeLoginState,
}) => {
  const handleOnClick = () => {
    setIsConfirmModalVisible(false);
    handleOnDelete(id);
  };
  return (
    <div className="confirm-modal-wrapper fadeIn">
      <div className="confirm-modal-container">
        <img
          className="confirm-modal-img"
          src="https://cdn-icons-png.flaticon.com/512/6518/6518457.png"
          alt=""
        />
        <h2 className="confirm-modal-title">Are you sure?</h2>
        <p className="confirm-modal-description">This shit can't be undone.</p>
        <div className="confirm-modal-button-container">
          <button
            onClick={() => {
              setIsConfirmModalVisible(false);
            }}
            className="confirm-btn"
            type="submit"
          >
            Nope
          </button>
          <button
            onClick={(e) => {
              handleOnClick();
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

export default ConfirmModal;
