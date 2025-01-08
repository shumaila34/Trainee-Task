import React from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const { username } = useParams();
  return (
    <div>
      <p>Heey !!! User, you've logged in successfully as {username}</p>
    </div>
  );
};

export default Login;
