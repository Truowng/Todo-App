import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "1" ? true : false
  );
  useEffect(() => {
    const accounts = [
      {
        id: 0,
        username: "admin@admin",
        password: "123456",
        name: "Admin",
      },
      {
        id: 1,
        username: "guest@guest",
        password: "123456",
        name: "Guest",
      },
    ];
    const accountsJson = JSON.stringify(accounts);
    localStorage.setItem("accounts", accountsJson);
  }, []);

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
