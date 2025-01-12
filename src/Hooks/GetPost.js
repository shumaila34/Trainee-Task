import { useState } from "react";
import { getPostService } from "../Services/getPostService";

export const useGetPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPost = async () => {
    setLoading(true);
    try {
      let data = await getPostService();
      setPosts(data);
      // return data;
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { posts, getPost, loading, error };
};

export default useGetPost;
// github weali exasmple open krna sr ki hn
