import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserResponse } from "@/types/auth/user";

interface UserStore {
  user: UserResponse | null;
  isLoggedIn: boolean;
  setUser: (user: UserResponse) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) => set({ user, isLoggedIn: true }),
      clearAuth: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "user-storage",
    },
  ),
);
