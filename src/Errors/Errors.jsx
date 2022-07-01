import React from "react";

const Errors = ({ type }) => {
  const ErrorsMassageHandler = (type) => {
    let ErrorsMassage = "";
    switch (type) {
      case "required":
        ErrorsMassage = "Hey! Please write something";
        break;
      case "maxLength":
      case "minLength":
        ErrorsMassage = "Hmm.. You need to write 5-20 characters";
        break;
      case "checkUsername":
        ErrorsMassage = "Oops! Your username is not correct";
        break;
      case "checkPassword":
        ErrorsMassage = "Oops! Your password is not correct";
        break;
      default:
    }
    return ErrorsMassage;
  };

  return (
    <>
      <div>
        <p style={{ color: "white" }}>
          <i
            style={{ marginRight: "8px" }}
            class="fa-solid fa-circle-question"
          ></i>
          {ErrorsMassageHandler(type)}
        </p>
      </div>
    </>
  );
};

export default Errors;
