import { User } from "@/types/interfaces";
import { create } from "zustand";

interface IAuth {
  user: User | null; //type User comes from firebase
  loading: boolean;
  token: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setToken: (token: string | null) => void;
}

const useAuthStore = create<IAuth>((set) => ({
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setLoading: (loading) => set({ loading }),
  user: null,
  token: null,
  loading: false,
}));

export default useAuthStore;
