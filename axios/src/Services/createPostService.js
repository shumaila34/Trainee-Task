// import axiosInstance from "./AxiosInstance"; // Axios instance with interceptors
import axios from "axios";
import axiosInstance from "../Config/axios";

export const createPostService = async (postData) => {
  const response = await axiosInstance.post("/posts", postData); // POST request to API
  return response?.data; // Return the API response data
};
