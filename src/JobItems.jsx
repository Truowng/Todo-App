import React from "react";

const JobItems = ({ job, index, handleOnDelete }) => {
  return (
    <div className="todo-content">
      <button
        onClick={() => alert("Function is in development stage")}
        className="action-btn fix"
      >
        <i class="fa-solid fa-feather-pointed"></i>
      </button>
      <button
        onClick={() => handleOnDelete(job.id)}
        className="action-btn delete"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div className="todo-content-list">
        <div className="todo-content-item">
          <h2 className="content-item-title">{job.title}</h2>
          <p className="content-item-description">{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobItems;
