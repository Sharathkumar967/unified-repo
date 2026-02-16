import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserDetails } from "@repo/types";

const initialState: AuthState = {
  isAuthenticated: false,
  userDetails: {
    role: null,
    stage: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthDetails: (state, action: PayloadAction<UserDetails>) => {
      state.isAuthenticated = true;
      state.userDetails = action.payload;
    },
    clearAuthDetails: (state) => {
      state.isAuthenticated = false;
      state.userDetails = {
        role: null,
        stage: null,
      };
    },
  },
});

export const { setAuthDetails, clearAuthDetails, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
