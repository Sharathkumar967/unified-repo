export interface UseAuthResult {
  user: string | null;
  isLoggedIn: boolean;
}

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error?: string;
}
