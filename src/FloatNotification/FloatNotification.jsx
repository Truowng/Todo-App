import React from "react";
import "./FloatNotification.css";

const FloatNotification = ({ clearFloatNoti }) => {
  return (
    <>
      <div className="float-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6518/6518432.png"
          alt=""
          className="float-img"
        />
        <div className="float-content">
          <h2 className="float-title">Invalid infomation</h2>
          <p className="float-description">Please check again</p>
        </div>
        <button onClick={clearFloatNoti} className="float-btn">
          <i className="fa-solid fa-trash-can float-icon"></i>
        </button>
      </div>
    </>
  );
};

export default FloatNotification;
