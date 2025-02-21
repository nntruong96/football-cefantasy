import { User } from "@/types";
import { create } from "zustand";

export interface AuthState {
  isLoggedIn: boolean;
  user?: User | null;
}

export interface AuthActions {
  setUser: (user: User) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  isLoggedIn: false,
  user: null,
  setUser(user) {
    set({ ...get(), user, isLoggedIn: true });
  },
  reset() {
    set({ ...get(), isLoggedIn: false, user: null });
  },
}));
