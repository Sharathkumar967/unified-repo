import * as SecureStore from "expo-secure-store";
import type { TokenStorage } from "@repo/types";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@repo/core";

export const tokenStorage: TokenStorage = {
  async getAccessToken() {
    return await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
  },

  async setAccessToken(token: string) {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
  },

  async removeAccessToken() {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  },

  async getRefreshToken() {
    return await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
  },

  async setRefreshToken(token: string) {
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, token);
  },

  async removeRefreshToken() {
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
  },
};

export default tokenStorage;
