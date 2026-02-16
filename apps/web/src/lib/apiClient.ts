import { createApiClient } from "@repo/api";

export const apiClient = createApiClient(
  process.env.BASE_URL || "http://localhost:4001/api",
);
