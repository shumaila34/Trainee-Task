import React from "react";
import { useParams } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { username } = useParams();
  return (
    <div className="login-container">
      <h1>Welcome to Dax University</h1>

      <p className="welcome-message">
        Hey!!! internee, you've successfully login as{" "}
        <span className="username">{username ? username : "Guest"}</span>.
      </p>
    </div>
  );
};

export default Login;
