import React from "react";
import "./Form.css";
import { DatePicker, Space } from "antd";

const Form = ({ handleOnChangeTitle, handleOnChangeDescription, job }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="input-container">
        <input
          onChange={(e) => {
            handleOnChangeTitle(e.target.value);
          }}
          value={job.title}
          type="text"
          className="input"
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            handleOnChangeDescription(e.target.value);
          }}
          value={job.description}
          type="text"
          className="input"
          placeholder="Description"
        />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
    </>
  );
};

export default Form;
