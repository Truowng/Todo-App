import React from "react";
import "./Dashboard.css";
import { Modal } from "antd";
import { useState } from "react";
import Form from "./Form/Form";
import JobList from "./JobList";
import EditForm from "./EditModal/EditModal";
import Search from "./Search/Search";
import ConfirmModal from "./Cofirm Modal/ConfirmModal";
import ConfirmLogOutModal from "./ConfirmLogOutModal/ConfirmLogOutModal";

const Dashboard = ({ takeLoginState }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isConfirmLogOutModalVisible, setIsConfirmLogOutModalVisible] =
    useState(false);
  const [job, setJob] = useState({
    title: "",
    description: "",
  });

  const [currentJob, setCurrentJob] = useState({});

  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    if (storageJobs === null) {
      return [];
    }
    return storageJobs;
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (job) => {
    setEditJob(job);
    setIsEditModalVisible(true);
  };

  const handleOk = (value) => {
    const count = 0;
    console.log("okCount", count + 1);
    setIsModalVisible(false);
    const date = new Date();
    const data = {
      id: Math.random().toString(),
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      title: value.Title,
      description: value.Description,
    };
    console.log(data);
    setJobs((prev) => {
      const newJobs = [...prev, data];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    // setJob({
    //   title: "",
    //   description: "",
    // });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setJob({
      title: "",
      description: "",
    });
  };

  const handleOpenModal = (id) => {
    setIsConfirmModalVisible(true);
    setCurrentJob(id);
  };

  const handleOnDelete = (id) => {
    setJobs((prev) => {
      const newData = prev.filter((job) => {
        return job.id !== id;
      });
      const jsonDeleteJob = JSON.stringify(newData);
      localStorage.setItem("jobs", jsonDeleteJob);
      return newData;
    });
    setIsConfirmModalVisible(false);
  };

  const saveEditJob = (value) => {
    setJobs((prev) => {
      console.log(prev);
      const data = prev.map((job) => {
        return job.id === editJob.id
          ? {
              ...job,
              title: value.editTitle,
              description: value.editDescription,
            }
          : job;
      });
      const jsonEditJob = JSON.stringify(data);
      localStorage.setItem("jobs", jsonEditJob);
      console.log(data);
      return data;
    });
  };
  const setSearchValueHandler = (title) => {
    const data = JSON.parse(localStorage.getItem("jobs"));
    const newData =
      title.length === 0
        ? [...data]
        : data.filter(
            (job) =>
              job.title.includes(title) || job.description.includes(title)
          );
    setJobs(newData);
  };

  return (
    <>
      <div className="container dashboard">
        <div className="sidebar-container">
          <div className="avatar">
            <img
              className="avatar-img"
              src={
                localStorage.getItem("name") === "Admin"
                  ? "https://cdn-icons-png.flaticon.com/512/4561/4561032.png"
                  : "https://cdn-icons-png.flaticon.com/512/4213/4213659.png"
              }
              alt=""
            />
            <h3 className="username">{localStorage.getItem("name")}</h3>
          </div>
          <button
            className="submit-btn logout"
            onClick={(e) => {
              setIsConfirmLogOutModalVisible(true);
            }}
          >
            Log Out
          </button>
          <div className="task-container">
            <ul className="task-list">
              <li className="task-item">
                <i className="task-icon fa-solid fa-list-check"></i>My task
              </li>
              <li className="task-item">
                <i className="task-icon fa-solid fa-inbox"></i>Inbox
              </li>
              <li className="task-item">
                <i className="task-icon fa-solid fa-gear"></i>Setting
              </li>
            </ul>
            <img
              className="task-img"
              src={
                localStorage.getItem("name") === "Admin"
                  ? "https://cdn-icons-png.flaticon.com/512/6518/6518459.png"
                  : "https://cdn-icons-png.flaticon.com/512/4383/4383868.png"
              }
              alt=""
            />
            <p className="description">
              {localStorage.getItem("name") === "Admin"
                ? "Welcome Back!"
                : "Welcome Guest!"}
            </p>
          </div>
        </div>
        <div className="todo-container">
          <div className="todo-header-container">
            <h1 className="todo-header">My Task</h1>
            <div className="btn-container">
              <Search setSearchValueHandler={setSearchValueHandler} />
              <button onClick={showModal} className="todo-add-btn">
                +
              </button>
            </div>
          </div>
          <div className="todo-status-container">
            <div className="todo-status-item">
              <p className="todo-status-header">UP COMING</p>
            </div>
            <div className="todo-status-item">
              <p className="todo-status-header">DOING</p>
            </div>
            <div className="todo-status-item">
              <p className="todo-status-header">DONE</p>
            </div>
          </div>
          <div className="todo-content-container">
            <JobList
              isConfirmModalVisible={isConfirmModalVisible}
              setIsConfirmModalVisible={setIsConfirmModalVisible}
              showEditModal={showEditModal}
              handleOnDelete={handleOpenModal}
              jobs={jobs}
            />
          </div>
        </div>
        {isModalVisible && (
          <Modal
            closeIcon={<i class="fa-brands fa-xbox"></i>}
            okText={<i class="fa-solid fa-thumbs-up"></i>}
            cancelText="Nope"
            centered
            title="Todo List"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form job={job} handleOk={handleOk} />
          </Modal>
        )}
        {isEditModalVisible && (
          <Modal
            closeIcon={<i class="fa-brands fa-xbox"></i>}
            centered
            title="Edit"
            visible={isEditModalVisible}
            onOk={() => {
              setIsEditModalVisible(false);
            }}
            onCancel={() => {
              setIsEditModalVisible(false);
            }}
            footer={null}
          >
            <EditForm
              dataEditJob={editJob}
              setEditJob={setEditJob}
              setIsEditModalVisible={setIsEditModalVisible}
              saveEditJob={saveEditJob}
              jobs={job}
            />
          </Modal>
        )}
      </div>
      {isConfirmModalVisible && (
        <ConfirmModal
          takeLoginState={takeLoginState}
          id={currentJob}
          handleOnDelete={handleOnDelete}
          isConfirmModalVisible={isConfirmModalVisible}
          setIsConfirmModalVisible={setIsConfirmModalVisible}
        />
      )}
      {isConfirmLogOutModalVisible && (
        <ConfirmLogOutModal
          takeLoginState={takeLoginState}
          setIsConfirmLogOutModalVisible={setIsConfirmLogOutModalVisible}
        />
      )}
    </>
  );
};

export default Dashboard;
