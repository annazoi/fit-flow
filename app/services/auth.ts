import axios from "axios";
import { CreatedUser } from "@/types/auth/interface";
import { User } from "@/types/interfaces";

export const createUser = async (data: CreatedUser) => {
  try {
    const response = await axios.post("/api/auth/signup", data);
    return response.data;
  } catch (error: any) {
    console.error("Error creating user:", error.response?.data?.error);
    throw error;
  }
};

export const signInUser = async (data: User) => {
  try {
    const response = await axios.post("/api/auth/signin", data);
    return response.data;
  } catch (error) {
    console.error("Error signing in user:", error);
    throw error;
  }
};
