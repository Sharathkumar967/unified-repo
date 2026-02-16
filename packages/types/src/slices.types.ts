import { Role } from "./index";

export type BaseUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export interface UserState {
  currentUser: BaseUser | null;
  isLoading: boolean;
  error: string | null;
  preferences: {
    theme: "light" | "dark" | "system";
    language: string;
    notifications: boolean;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  userDetails: UserDetails;
}

export interface UserDetails {
  role: string | null;
  stage: string | null;
}
