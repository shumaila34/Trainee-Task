// src/components/DeletePost.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeletePost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      navigate("/"); // Navigate back to the post list after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h2>Delete Post</h2>
      {post ? (
        <>
          <p>Are you sure you want to delete this post?</p>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default DeletePost;
