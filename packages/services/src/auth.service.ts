import { apiEndpoints } from "@repo/api";
import {
  LoginParams,
  SignupParams,
  LoginResponse,
  SignupResponse,
} from "@repo/types";

export const createAuthService = (apiClient: any) => {
  const login = async (params: LoginParams): Promise<LoginResponse> => {
    const response = await apiClient.post(apiEndpoints.LOGIN, params);

    // return response.data;

    const data = {
      data: {
        ...response.data,
        role: "student",
        stage: "primary",
      },
      status: response.status,
      message: response.message,
    };

    return data;
  };

  const signup = async (params: SignupParams): Promise<SignupResponse> => {
    const response = await apiClient.post(apiEndpoints.SIGNUP, params);
    return response.data;
  };

  return {
    login,
    signup,
  };
};
