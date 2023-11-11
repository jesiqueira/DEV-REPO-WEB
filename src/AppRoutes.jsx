import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import ManPage from "./pages/MainPage/ManPage";
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = React.useContext(AuthContext);
    console.log("Carregando:?", loading);

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    if (loading) {
      return <div className="loading">Carregando...1</div>;
    }
    return children;
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <ManPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
