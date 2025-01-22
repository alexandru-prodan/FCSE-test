import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext/authContext.jsx";
import { ReactNode } from "react";
import Loading from "../../patterns/Loading.tsx";

interface SignedOutProtectedRouteProps {
  children: ReactNode;
  redirectPath?: string;
}

const SignedOutProtectedRoute = ({
  redirectPath = "/login",
  children,
}: SignedOutProtectedRouteProps) => {
  const { isAuthenticated, authError, loading } = useAuthContext();


  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated && authError) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default SignedOutProtectedRoute;
