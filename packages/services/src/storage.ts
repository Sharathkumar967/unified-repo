export interface TokenStorage {
  getToken(): Promise<string | null>;
  removeToken(): Promise<void>;
}
