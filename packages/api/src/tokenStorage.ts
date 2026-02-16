import Cookies from "js-cookie";
import type { TokenStorage } from "@repo/types";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@repo/core";

export const tokenStorage: TokenStorage = {
  async getAccessToken() {
    return Cookies.get(ACCESS_TOKEN_KEY) ?? null;
  },

  async setAccessToken(token: string) {
    Cookies.set(ACCESS_TOKEN_KEY, token, {
      secure: true,
      sameSite: "strict",
    });
  },

  async removeAccessToken() {
    Cookies.remove(ACCESS_TOKEN_KEY);
  },

  async getRefreshToken() {
    return Cookies.get(REFRESH_TOKEN_KEY) ?? null;
  },

  async setRefreshToken(token: string) {
    Cookies.set(REFRESH_TOKEN_KEY, token, {
      secure: true,
      sameSite: "strict",
    });
  },

  async removeRefreshToken() {
    Cookies.remove(REFRESH_TOKEN_KEY);
  },
};

export default tokenStorage;
