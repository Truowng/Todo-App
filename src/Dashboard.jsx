import React from "react";
import "./Dashboard.css";
import { Modal } from "antd";
import { useState } from "react";
import Form from "./Form/Form";
import JobList from "./JobList";

const Dashboard = ({ takeLoginState }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [job, setJob] = useState({
    title: "",
    description: "",
  });
  const [jobs, setJobs] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const data = { ...job, id: Math.random().toString() };
    setJobs((prev) => {
      return [...prev, data];
    });
    setJob({
      title: "",
      description: "",
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setJob({
      title: "",
      description: "",
    });
  };

  const handleOnChangeTitle = (value) => {
    setJob((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleOnChangeDescription = (value) => {
    setJob((prev) => {
      return { ...prev, description: value };
    });
  };

  const handleOnDelete = (id) => {
    setJobs((prev) => {
      return prev.filter((job) => {
        return job.id !== id;
      });
    });
  };

  return (
    <>
      <div className="container dashboard">
        <div className="sidebar-container">
          <div className="avatar">
            <img
              className="avatar-img"
              src="https://cdn-icons-png.flaticon.com/512/4561/4561032.png"
              alt=""
            />
            <h3 className="username">Admin</h3>
          </div>
          <button
            className="submit-btn logout"
            onClick={() => {
              takeLoginState(false);
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
              src="https://cdn-icons-png.flaticon.com/512/6518/6518459.png"
              alt=""
            />
            <p className="description">Welcome Back!</p>
          </div>
        </div>
        <div className="todo-container">
          <div className="todo-header-container">
            <h1 className="todo-header">My Task</h1>
            <button onClick={showModal} className="todo-add-btn">
              +
            </button>
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
            <JobList handleOnDelete={handleOnDelete} jobs={jobs} />
          </div>
        </div>

        <Modal
          centered
          title="Todo List"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            job={job}
            handleOnChangeTitle={handleOnChangeTitle}
            handleOnChangeDescription={handleOnChangeDescription}
          />
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
