import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./Login.css";
import Errors from "./Errors/Errors";
import FloatNotification from "./FloatNotification/FloatNotification";

export default function Login({ takeLoginState, data }) {
  const storageAccounts = JSON.parse(localStorage.getItem("accounts"));
  const [isFloatNotiVisible, setIsFloatNotiVisible] = useState(false);
  const clearFloatNoti = () => {
    setIsFloatNotiVisible(false);
  };
  const handleFloatNoti = () => {
    setIsFloatNotiVisible(true);
    setTimeout(() => {
      setIsFloatNotiVisible(false);
      console.log("Counting");
    }, 3600);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const currentAccount = storageAccounts.find(function (account) {
      return (
        account.username === data.username && account.password === data.password
      );
    });
    console.log(currentAccount, storageAccounts);
    if (currentAccount) {
      localStorage.setItem("name", currentAccount.name);
      takeLoginState(true);
      const loggedIn = 1;
      localStorage.setItem("loggedIn", loggedIn);
    }
  };
  const catchErrors = () => {
    handleFloatNoti();
  };
  console.log(errors);

  return (
    <>
      {isFloatNotiVisible && (
        <FloatNotification clearFloatNoti={clearFloatNoti} />
      )}
      <form
        className="container"
        onSubmit={handleSubmit(onSubmit, catchErrors)}
      >
        <div className="input-container">
          <h1 className="heading">Login</h1>

          <input
            className="input"
            type="text"
            placeholder="Username"
            {...register("username", {
              required: true,
              maxLength: 20,
              minLength: 5,
              validate: {
                checkUsername: (value) => {
                  if (
                    value === storageAccounts[0].username ||
                    value === storageAccounts[1].username
                  ) {
                    return true;
                  }
                  return false;
                },
              },
            })}
          />
          {errors.username?.type && <Errors type={errors.username.type} />}
          <input
            className="input"
            type="password"
            name="Password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 5,
              validate: {
                checkPassword: (value) => {
                  if (
                    value === storageAccounts[0].password ||
                    value === storageAccounts[1].password
                  ) {
                    return true;
                  }
                  return false;
                },
              },
            })}
          />
          {errors.password?.type && <Errors type={errors.password.type} />}
          <button className="submit-btn" type="submit">
            Go
          </button>
        </div>
      </form>
    </>
  );
}
