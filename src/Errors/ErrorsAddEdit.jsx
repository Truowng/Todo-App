import React from "react";

const ErrorsAdd = ({ type }) => {
  const ErrorsAddMassageHandler = (type) => {
    let ErrorsAddMassage = "";
    switch (type) {
      case "required":
        ErrorsAddMassage = "Hey! Please write something";
        break;
      case "checkTitleLength":
        ErrorsAddMassage = "Hmm.. You need to write 1-100 characters";
        break;
      case "checkDescriptionLength":
        ErrorsAddMassage = "Hmm.. You need to write 1-1000 characters";
        break;
      default:
    }
    return ErrorsAddMassage;
  };

  return (
    <div>
      <p style={{ color: "white" }}>
        <i
          style={{ marginRight: "8px" }}
          class="fa-solid fa-circle-question"
        ></i>
        {ErrorsAddMassageHandler(type)}
      </p>
    </div>
  );
};

export default ErrorsAdd;
