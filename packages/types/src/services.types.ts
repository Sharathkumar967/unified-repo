// Base response without token
export interface ApiResponse<T> {
  status: number;
  message: string;
  success?: number;
  error?: number;
  data: T;
}

// REQUEST PARAMS

export type LoginParams = {
  username: string;
  password: string;
  product: string;
  platform: string;
};

export type SignupParams = {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
};

export type RefreshTokenParams = {
  refreshToken: string;
};

// RESPONSE TYPES
export type LoginResponse = ApiResponse<LoginData>;

export type RefreshTokenResponse = ApiResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export type SignupResponse = ApiResponse<LoginData>;

// ADDITIONAL TYPES
export type LoginData = {
  accessToken: string;
  refreshToken: string;
  role: string;
  stage?: string;
};
