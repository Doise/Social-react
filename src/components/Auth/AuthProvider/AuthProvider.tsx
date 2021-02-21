import { createContext, useContext, useState } from "react";
import { AuthDialog } from "../AuthDialog";
import { useCookies } from "react-cookie";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  status: string;
}

export interface IUserResult {
  user: IUser;
  token: string;
}

export interface IAuthContext {
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  user: IUser | null;
  logIn: (userResult: IUserResult) => void;
  logOut: () => void;
  getToken: () => string | null;
}

export interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthOpen: false,
  setIsAuthOpen: (open: boolean) => {},
  user: null,
  logIn: (userResult: IUserResult) => {},
  logOut: () => {},
  getToken: () => null,
});

export const useAuth = () => useContext(AuthContext);

export const TOKEN_COOKIE = "social_token";

export const AuthProvider = ({ children }: Props) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_COOKIE]);

  const logOut = () => {
    setUser(null);
    removeCookie(TOKEN_COOKIE);
  };

  const logIn = (userResult: IUserResult) => {
    setUser(userResult.user);
    setIsAuthOpen(false);
    setCookie(TOKEN_COOKIE, userResult.token);
  };

  const getToken = (): string | null => {
    return cookies[TOKEN_COOKIE];
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthOpen,
        setIsAuthOpen,
        user,
        logIn,
        logOut,
        getToken
      }}
    >
      {children}
      <AuthDialog />
    </AuthContext.Provider>
  );
};
