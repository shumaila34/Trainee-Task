import axiosInstance from "../Config/apiConfig";

export const updatePostService = async (id, data) => {
  const response = await axiosInstance.put(`/posts/${id}`, data);
  return response?.data;
};
