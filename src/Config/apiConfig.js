import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com"; // Fake API endpoint

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createPost = (data) => axiosInstance.post("/posts", data);
export const updatePost = (id, data) => axiosInstance.put(`/posts/${id}`, data);
export const deletePost = (id) => axiosInstance.delete(`/posts/${id}`);
export const patchPost = (id, data) =>
  axiosInstance.patch(`/posts/${id}`, data);
export const getPosts = () => axiosInstance.get("/posts");

export default axiosInstance;
