import React, { createContext, useState, useContext, ReactNode } from "react";
import Cookies from "js-cookie";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA } from "../../graphql/queries/getUserData.ts";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (payload: { token: string; id: string }) => void;
  logout: () => void;
  authError: string;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = React.useState<User | null>(null);

  const [authError, setAuthError] = useState<string>("");

  const [loadUser, { loading }] = useLazyQuery(GET_USER_DATA);

  React.useEffect(() => {
    const token = Cookies.get("auth_token");
    const userId = Cookies.get("user_id");
    if (token) {
      setAuthError("");

      loadUser({
        variables: {
          id: userId,
        },
        onCompleted: (userData) => {
          if (userData && userData.user && userData.user.id) {
            setUserData(userData.user);
            setIsAuthenticated(true);
          }
        },
        onError: (error) => {
          console.error(error);
        },
      });

      setIsAuthenticated(true);
    }
  }, []);

  const login = (payload: { token: string; id: string }) => {
    if (!payload.token) {
      return setAuthError("No user session found.");
    }

    // Set the token in a secure HttpOnly cookie
    Cookies.set("auth_token", payload.token, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });
    Cookies.set("user_id", payload.id, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });

    loadUser({
      variables: {
        id: payload.id,
      },
      onCompleted: (userData) => {
        if (userData && userData.user && userData.user.id) {
          setUserData(userData.user);
          setIsAuthenticated(true);
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const logout = () => {
    console.log("entered here");
    setIsAuthenticated(false);
    Cookies.remove("auth_token");
    Cookies.remove("user_id");
    window.location.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        authError,
        user: userData,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
