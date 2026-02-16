export * from "./slices.types";
export * from "./services.types";

export type Role =
  | "student"
  | "classteacher"
  | "subjectteacher"
  | "admin"
  | "parent";

export type Stage = "fln" | "preparatory" | "primary" | "secondary" | "default";

export interface TokenStorage {
  getAccessToken(): Promise<string | null>;
  setAccessToken(token: string): Promise<void>;
  removeAccessToken(): Promise<void>;

  getRefreshToken(): Promise<string | null>;
  setRefreshToken(token: string): Promise<void>;
  removeRefreshToken(): Promise<void>;
}
