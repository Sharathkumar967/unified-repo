import { createApiClient } from "@repo/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined in the environment.");
}

export const apiClient = createApiClient(BASE_URL);
