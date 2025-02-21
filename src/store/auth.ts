import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";

interface AuthState {
  user?: User;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    setAuthUser(state, payload: PayloadAction<User>) {
      state.user = payload.payload;
    },
    resetAuth() {
      return { ...initialState };
    },
  },
});

export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
