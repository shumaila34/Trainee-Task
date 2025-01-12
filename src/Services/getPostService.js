import axiosInstance from "../Config/apiConfig";

export const getPostService = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};
