import axiosInstance from "../Config/apiConfig";

export const createPostService = async (post) => {
  const response = await axiosInstance.post("/posts", post);
  return response.data;
};
