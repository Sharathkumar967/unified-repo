export interface AuthSliceState {
  user: string | null;
  token: string | null;
}

export interface AppSliceState {
  isLoading: boolean;
}
