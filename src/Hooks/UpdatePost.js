import { useState } from "react";
import { updatePostService } from "../Services/updatePostService";

export const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePost = async (id, post) => {
    setLoading(true);
    try {
      await updatePostService(id, post);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { updatePost, loading, error };
};
export default useUpdatePost;
