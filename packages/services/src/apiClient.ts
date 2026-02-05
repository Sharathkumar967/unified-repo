import axios, { type AxiosInstance } from "axios";
import type { TokenStorage } from "./storage";

let apiClient: AxiosInstance | null = null;

export const initApiClient = (storage: TokenStorage) => {
  apiClient = axios.create({
    baseURL: "https://qmstest.eksaq.ac.in/apiseq/api/v1/",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use(async (config) => {
    const token = await storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  apiClient.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response?.status === 401) {
        await storage.removeToken();
      }
      return Promise.reject(error);
    },
  );
};

export const getApiClient = (): AxiosInstance => {
  if (!apiClient) {
    throw new Error("apiClient not initialized");
  }
  return apiClient;
};
