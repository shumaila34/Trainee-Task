import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>Oops! Page not found.</h1>
      <p>We couldn't find the page you're looking for.</p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
