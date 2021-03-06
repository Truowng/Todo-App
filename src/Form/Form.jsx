import React from "react";
import { useForm } from "react-hook-form";
import ErrorsAddEdit from "../Errors/ErrorsAddEdit";

const Form = ({ handleOk }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, errors) => {
    handleOk(data);
  };
  console.log(errors);

  return (
    <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        type="text"
        placeholder="Title"
        {...register("Title", {
          required: true,
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
        })}
      />
      {errors.Title?.type && <ErrorsAddEdit type={errors.Title.type} />}

      <input
        className="input"
        type="text"
        placeholder="Description"
        {...register("Description", {
          required: true,
          validate: {
            checkDescriptionLength: (value) => {
              if (value.length <= 1000) {
                return true;
              }
              return false;
            },
          },
        })}
      />
      {errors.Description?.type && (
        <ErrorsAddEdit type={errors.Description.type} />
      )}

      <input className="submit-btn" type="submit" />
    </form>
  );
};

export default Form;
