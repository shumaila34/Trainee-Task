import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import EditPost from "../pages/EditPost";
import DeletePost from "../pages/DeletPost";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PostList />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/delete-post/:id" element={<DeletePost />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
