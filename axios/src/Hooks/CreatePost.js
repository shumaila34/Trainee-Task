import { useState } from "react";
import { createPostService } from "../Services/createPostService"; // Service to handle the API call

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createPost = async (postData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createPostService(postData); // Call service to create a post
      setSuccess(true); // Mark success if the API call succeeds
    } catch (err) {
      setError(err.message || "Something went wrong while creating the post");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return { createPost, loading, error, success };
};

export default useCreatePost;
