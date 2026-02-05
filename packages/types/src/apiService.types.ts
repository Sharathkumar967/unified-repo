// API request payloads
export interface LoginParams {
  email: string;
  password: string;
}

export interface SignupParams {
  email: string;
  password: string;
  name: string;
}

// API responses
export interface LoginResponse {
  token: string;
  userId: string;
}

export interface SignupResponse {
  id: string;
  email: string;
}
