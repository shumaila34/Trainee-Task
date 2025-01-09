import React, { useState } from "react";
import useCreatePost from "../Hooks/CreatePost";

const CreatePostForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createPost, loading, error, success } = useCreatePost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("email and password are required");
    }

    await createPost({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "1rem",
        border: "1px solid #ddd",
      }}
    >
      <h3>Post Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "0.5rem 1rem" }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>
      )}
      {success && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          Post created successfully!
        </p>
      )}
    </div>
  );
};

export default CreatePostForm;
