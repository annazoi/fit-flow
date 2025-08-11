import axios from "axios";
import { CreateUser } from "@/types/auth/interface";
import { User } from "@/types/interfaces";

export const createUser = async (data: CreateUser) => {
  try {
    const response = await axios.post("/api/auth/signup", data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
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
