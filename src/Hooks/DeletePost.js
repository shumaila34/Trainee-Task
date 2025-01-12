import { useState } from "react";
import { deletePostService } from "../Services/deletePostService";

export const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePost = async (id) => {
    setLoading(true);
    try {
      await deletePostService(id);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { deletePost, loading, error };
};

export default useDeletePost;
