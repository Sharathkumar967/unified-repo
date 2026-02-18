import { createApiClient } from "@repo/api";

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in the environment.");
}

export const apiClient = createApiClient(BASE_URL);
