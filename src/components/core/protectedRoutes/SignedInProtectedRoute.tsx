import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../../context/authContext/authContext.jsx";
import Loading from "../../patterns/Loading.tsx";

interface SignedInProtectedRouteProps {
  children: ReactNode;
  redirectPath?: string;
}

const SignedInProtectedRoute = ({
  children,
  redirectPath = "/account",
}: SignedInProtectedRouteProps) => {
  const { isAuthenticated, authError, loading } = useAuthContext();

  if (loading) {
    return <Loading />;
  }

  if (!authError && isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default SignedInProtectedRoute;
