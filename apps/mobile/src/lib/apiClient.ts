import { createApiClient } from "@repo/api";
import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig?.extra?.apiUrl;

if (!BASE_URL) {
  throw new Error("apiUrl is not defined in app.config.js extra constants.");
}

export const apiClient = createApiClient(BASE_URL);
