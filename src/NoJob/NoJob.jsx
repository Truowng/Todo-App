import React from "react";
import "./NoJob.css";

const NoJob = () => {
  return (
    <div className="no-job-wrapper">
      <img
        className="no-job-img"
        src="https://cdn-icons.flaticon.com/png/512/5722/premium/5722140.png?token=exp=1655459539~hmac=f22a0b234720cf15e5b5a2d8622166a5"
        alt=""
      />
      <h1 className="no-job-text">Write something new</h1>
    </div>
  );
};

export default NoJob;
