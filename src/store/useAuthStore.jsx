import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  token: "",
  no_hp: "",
  setToken: (token) => set({ token }),
  setNoHp: (no_hp) => set({ no_hp }),

  logout: () => set({ token: null, no_hp: "" }),
}));

export default useAuthStore;
