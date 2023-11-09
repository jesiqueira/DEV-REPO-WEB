import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import ManPage from "./pages/MainPage/ManPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<ManPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
