const JobItems = ({
  job,
  index,
  handleOnDelete,
  showEditModal,
  setIsConfirmModalVisible,
  isConfirmModalVisible,
}) => {
  return (
    <>
      <div className="todo-content">
        {localStorage.getItem("name") === "Admin" ? (
          <>
            <button
              onClick={() => showEditModal(job)}
              className="action-btn other"
            >
              <i class="fa-solid fa-feather-pointed"></i>
            </button>
            <button
              onClick={() => {
                handleOnDelete(job.id);
                setIsConfirmModalVisible(true);
              }}
              className="action-btn delete"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </>
        ) : (
          ""
        )}

        <div className="todo-content-list">
          <div className="todo-content-item">
            <h2 className="content-item-title">{job.title}</h2>
            <p className="content-item-description">{job.description}</p>
          </div>
          <div className="content-item-date-container">
            <p className="content-item-month">{job.month}</p>
            <p className="content-item-date">{job.date}</p>
            <p className="content-item-year">{job.year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItems;
