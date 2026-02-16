import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosError,
} from "axios";
import { apiEndpoints } from "./apiEndpoints";
import tokenStorage from "./tokenStorage";

/**
 * Extend Axios config to support _retry flag
 */
interface RetryAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const createApiClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      productid: 0,
    },
  });

  const refreshClient = axios.create({ baseURL });

  let isRefreshing = false;
  let refreshPromise: Promise<string> | null = null;

  client.interceptors.request.use(async (config) => {
    const token = await tokenStorage.getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;

        const refreshToken = await tokenStorage.getRefreshToken();

        if (!refreshToken) {
          await tokenStorage.removeAccessToken();
          await tokenStorage.removeRefreshToken();
          return Promise.reject(error);
        }

        try {
          if (!isRefreshing) {
            isRefreshing = true;

            refreshPromise = refreshClient
              .post(apiEndpoints.REFRESH_TOKEN, { refreshToken })
              .then(async (res) => {
                const newAccessToken = res.data.accessToken;
                await tokenStorage.setAccessToken(newAccessToken);
                return newAccessToken;
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          const newAccessToken = await refreshPromise!;

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          }

          return client(originalRequest);
        } catch (refreshError) {
          await tokenStorage.removeAccessToken();
          await tokenStorage.removeRefreshToken();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return client;
};
