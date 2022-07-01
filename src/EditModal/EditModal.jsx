import React from "react";
import { useForm } from "react-hook-form";
// import Errors from "../Errors/Errors";
import ErrorsAddEdit from "../Errors/ErrorsAddEdit";

const EditForm = ({
  setIsEditModalVisible,
  jobs,
  dataEditJob,
  setEditJob,
  saveEditJob,
}) => {
  console.log(jobs);
  const { title, description } = dataEditJob;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsEditModalVisible(false);
    saveEditJob(data);
  };
  console.log(errors);

  return (
    <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        defaultValue={title}
        type="text"
        placeholder="Title"
        {...register("editTitle", {
          validate: {
            checkTitleLength: (value) => {
              console.log(typeof value.length);
              if (value.length <= 100) {
                return true;
              }
              console.log("false");
              return false;
            },
          },
          required: true,
        })}
      />
      {errors.editTitle?.type && <ErrorsAddEdit type={errors.editTitle.type} />}
      <input
        defaultValue={description}
        className="input"
        type="text"
        name="editDescription"
        placeholder="Description"
        {...register("editDescription", {
          validate: {
            checkDescriptionLength: (value) => {
              console.log(typeof value.length);
              if (value.length <= 1000) {
                return true;
              }
              console.log("false");
              return false;
            },
          },
          required: true,
        })}
      />
      {errors.editDescription?.type && (
        <ErrorsAddEdit type={errors.editDescription.type} />
      )}

      <input className="submit-btn" type="submit" />
    </form>
  );
};

export default EditForm;
