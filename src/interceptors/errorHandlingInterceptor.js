import axios from "axios";
import { FILESTORE_BASE_URL } from "../constants/endpoints";
import { NOTIFICATION_TYPE } from "../constants/notificationType";

const fileStoreApi = axios.create({
    baseURL: FILESTORE_BASE_URL
  });

fileStoreApi.interceptors.response.use(
    (response) => response,
    (error) => {
      const errorMessage =
        error.response?.data?.title || error.message || "An error occurred.";
      
      if (typeof window !== "undefined" && window.showNotification) {
        window.showNotification(crypto.randomUUID(), errorMessage, NOTIFICATION_TYPE.ERROR);
      }
  
      return Promise.reject(error);
    }
  );
  

export default fileStoreApi;