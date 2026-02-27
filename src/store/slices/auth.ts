import type { StateCreator } from "zustand";

export interface IAuthStore {
  isLoggedIn: boolean;
  userName: string;
  userEmail: string;
}

const createAuthSlice: StateCreator<IAuthStore> = () => ({
  isLoggedIn: false,
  userName: "",
  userEmail: "",
});

export default createAuthSlice;
