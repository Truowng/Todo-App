import logo from "./logo.svg";
import Login from "./Login.jsx";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const takeLoginState = (state) => {
    setIsLoggedIn(state);
  };
  return (
    <div className="wrapper">
      {!isLoggedIn && <Login takeLoginState={takeLoginState} />}
      {isLoggedIn && <Dashboard takeLoginState={takeLoginState} />}
    </div>
  );
}
export default App;
