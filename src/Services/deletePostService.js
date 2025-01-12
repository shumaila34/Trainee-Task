import axiosInstance from "../Config/apiConfig";

export const deletePostService = async (id) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};
