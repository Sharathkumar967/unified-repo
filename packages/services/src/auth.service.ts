import type {
  LoginParams,
  LoginResponse,
  SignupParams,
  SignupResponse,
} from "@unified/types";
import { apiEndpoints } from "./apiEndpoints";
import { getApiClient } from "./apiClient";

export const loginService = (
  params: LoginParams,
): Promise<{ data: LoginResponse }> => {
  return getApiClient().post(apiEndpoints.LOGIN, params);
};

export const signupService = (
  params: SignupParams,
): Promise<{ data: SignupResponse }> => {
  return getApiClient().post(apiEndpoints.SIGNUP, params);
};
