import React, { ReactNode } from "react";
import {
  AuthContext as MockedAuthContext,
  User,
} from "../../../context/authContext/authContext.tsx";

interface AuthContextMockProps {
  children: ReactNode;
  isAuthenticated: boolean;
  login: (payload: { token: string; id: string }) => void;
  logout: () => void;
  authError: string;
  user: User | null;
  loading: boolean;
}

export const AuthContextMock: React.FC<AuthContextMockProps> = ({
  user,
  login,
  logout,
  children,
  isAuthenticated,
  authError,
  loading,
}) => {
  return (
    <MockedAuthContext.Provider
      value={{ user, login, logout, isAuthenticated, authError, loading }}
    >
      {children}
    </MockedAuthContext.Provider>
  );
};
