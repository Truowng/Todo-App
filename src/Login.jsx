// import React from "react";
// import "./Login.css";
// import { useState } from "react";

// const Login = ({ takeLoginState }) => {
//   function handleSubmit(e) {
//     e.preventDefault();
//     takeLoginState(true);
//   }
//   return (
//     <form onSubmit={handleSubmit} className="container">
//       <h1 className="heading">Login</h1>
//       <div className="input-container">
//         <input type="email" className="input" placeholder="Email" />
//         <input type="password" className="input" placeholder="Password" />
//         <button type="submit" className="submit-btn">
//           Login
//         </button>
//       </div>
//     </form>

//   );
// };

// export default Login;

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./Login.css";
// import { useState } from "react";
import Errors from "./Errors/Errors";

export default function Login({ takeLoginState }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, errors) => {
    console.log(data);
    takeLoginState(true);
  };
  console.log(errors);
  // function (e) {
  //   console.log(data)};
  //       e.preventDefault();
  //     }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
          })}
        />
        {errors.password?.type && <Errors type={errors.password.type} />}
        <button className="submit-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
