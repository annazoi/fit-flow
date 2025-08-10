import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  NotebookPen,
  History,
  Dumbbell,
} from "lucide-react";
import { NavbarItem } from "@/types/interfaces";

// menu items
export const NavbarItems: NavbarItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Exercises", url: "#", icon: Dumbbell },
  { title: "Notes", url: "#", icon: NotebookPen },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "History", url: "#", icon: History },
  { title: "Settings", url: "#", icon: Settings },
  // { title: "Search", url: "#", icon: Search },
];

// inside links
export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },
  exercises: "/exercises",
  notes: "/notes",
  calendar: "/calendar",
  history: "/history",
  settings: "/settings",
};
