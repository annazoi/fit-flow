import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { decodeToken } from "@/utils/token";

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  email: string;
  exp: number;
  userId: string;
  logOut: () => void;
  logIn: (payload: any) => void;
}

const initialStateValues = {
  isLoggedIn: false,
  token: "",
  email: "",
  userId: "",
  exp: 0,
};

export const authStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        ...initialStateValues,
        logOut: () => {
          set({
            ...initialStateValues,
          });
        },
        logIn: (payload: any) =>
          set({
            isLoggedIn: true,
            email: payload.email,
            token: payload.token,
            // avatar: payload?.avatar,
            userId: payload.userId,
            exp: payload.exp,
          }),
        updateProfile: (payload: any) =>
          set((state) => ({
            ...state,
            ...payload,
          })),
      }),
      {
        name: "fit-flow-auth",
      }
    )
  )
);

export const getAuthState = (): AuthState => {
  return authStore.getState();
};
