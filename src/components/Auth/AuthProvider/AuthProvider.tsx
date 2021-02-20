import { createContext, useContext, useState } from "react";
import { AuthDialog } from "../AuthDialog";

export interface IAuthContext {
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
}

export interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthOpen: false,
  setIsAuthOpen: (open: boolean) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthOpen,
        setIsAuthOpen,
      }}
    >
      {children}
      <AuthDialog />
    </AuthContext.Provider>
  );
};
