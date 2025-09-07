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
  { title: "Exercises", url: "/exercises", icon: Dumbbell },
  { title: "Notes", url: "/notes", icon: NotebookPen },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "History", url: "/history", icon: History },
  { title: "Settings", url: "/settings", icon: Settings },
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

// exercises
export const exerciseType = [
  {
    id: 1,
    name: "Chest",
    image: "/assets/chest.jpg",
  },
  {
    id: 2,
    name: "Strength",
    image: "/assets/strength.jpg",
  },
  {
    id: 3,
    name: "Flexibility",
    image: "/assets/flexibility.jpg",
  },
  {
    id: 4,
    name: "Balance",
    image: "/assets/balance.jpg",
  },
];
