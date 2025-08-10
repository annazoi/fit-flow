export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isLoggedIn?: boolean;
  userEntered?: boolean;
}

export interface NavbarItem {
  title: string;
  url: string;
  icon: React.ElementType;
}
