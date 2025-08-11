import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  email: string;
  // username: string;
  // fullName: string;
  // avatar: string;
  userId: string;
  exp: number;
  logOut: () => void;
  logIn: (payload: any) => void;
}

const initialStateValues = {
  isLoggedIn: false,
  token: "",
  email: "",
  // username: "",
  // fullName: "",
  // avatar: "",
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
