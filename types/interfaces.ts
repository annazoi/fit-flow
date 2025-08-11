export interface User {
  uid: string;
  email: string;
  isLoggedIn?: boolean;
  userEntered?: boolean;
}

export interface NavbarItem {
  title: string;
  url: string;
  icon: React.ElementType;
}
