import { createApiClient } from "@repo/api";
import { createAuthService, type AuthService } from "@repo/services";

const apiClient = createApiClient("http://10.0.2.2:4001/api");

export const authService: AuthService = createAuthService(apiClient);
