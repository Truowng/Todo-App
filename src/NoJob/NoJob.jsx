import React from "react";
import "./NoJob.css";

const NoJob = () => {
  return (
    <div className="no-job-wrapper">
      <img
        src={
          localStorage.getItem("name") === "Admin"
            ? "https://cdn-icons-png.flaticon.com/512/6518/6518461.png"
            : "https://cdn-icons-png.flaticon.com/512/4383/4383906.png"
        }
        alt=""
        className="no-job-img"
      />
      <h1 className="no-job-text">Write something new</h1>
    </div>
  );
};

export default NoJob;
