// src/services/api.ts
import { BASE_URL } from "@/constants";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await api.get<T>(url, config);
  return response.data;
};

// Thêm các hàm post, put, delete tương tự

export default api;
