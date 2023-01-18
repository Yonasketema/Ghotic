import axios from "axios";
import { toast } from "react-toastify";

export const apiClient = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:8001",
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (!(statusCode >= 400 && statusCode < 500)) {
    console.log("Loging ", error);
    toast.error("An Unexpected error occurrred. ");
  }

  return Promise.reject(error);
};

apiClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
