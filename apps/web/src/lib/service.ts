import { createAuthService } from "@repo/services";
import { apiClient } from "./apiClient";

export const authService = createAuthService(apiClient);
// export const userService = createUserService(apiClient);
