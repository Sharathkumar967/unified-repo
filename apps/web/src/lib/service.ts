import { createApiClient } from "@repo/api";
import { createAuthService } from "@repo/services";

const apiClient = createApiClient(
  process.env.BASE_URL || "http://localhost:4001/api",
);

export const authService = createAuthService(apiClient);
// export const userService = createUserService(apiClient);
