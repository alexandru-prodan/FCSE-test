import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/login/Login.ts";

import { AuthProvider } from "./context/authContext/authContext.tsx";
import SignedInProtectedRoute from "./components/core/protectedRoutes/SignedInProtectedRoute.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import SignedOutProtectedRoute from "./components/core/protectedRoutes/SignedOutProtectedRoute.tsx";
import Account from "./pages/account/Account.ts";
import LanguageSelector from "./components/utils/language/LanguageSelector.tsx";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <LanguageSelector />
        <AuthProvider>
          <Routes>
            <Route
              path="/login"
              element={
                <SignedInProtectedRoute>
                  <LoginPage />
                </SignedInProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <SignedOutProtectedRoute>
                  <Account />
                </SignedOutProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="*"
              element={
                <SignedOutProtectedRoute>
                  <Navigate to="/login" />
                </SignedOutProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
