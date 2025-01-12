import { useState } from "react";
import { createPostService } from "../Services/createPostService";

export const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (post) => {
    setLoading(true);
    try {
      await createPostService(post);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { createPost, loading, error };
};

export default useCreatePost;
