import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DeletePost() {
  const { id } = useParams(); // Get post ID from URL params
  const navigate = useNavigate();

  const [post, setPost] = useState(null); // Post data

  // Fetch the post details based on the ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`); // Replace with your API endpoint
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  // Handle delete post
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`); // Replace with your API endpoint to delete the post
      navigate("/"); // Redirect to the post list page after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Are you sure you want to delete this post?</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div>
        <button onClick={handleDelete} style={{ marginRight: "10px" }}>
          Yes, Delete Post
        </button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
}

export default DeletePost;
