import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// menu items
export type NavbarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export const NavbarItems: NavbarItem[] = [
  { title: "Home", url: "#", icon: Home },
  { title: "Exercises", url: "#", icon: Dumbbell },
  { title: "Notes", url: "#", icon: NotebookPen },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "History", url: "#", icon: History },
  { title: "Settings", url: "#", icon: Settings },
];
