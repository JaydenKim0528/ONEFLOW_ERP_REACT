import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavigation from "./components/layout/SideNavigation";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./styles/App.css";

function App() {
  const user = {
    userName: "John Doe",
    position: "Manager",
    company: "Oneflow",
    department: "IT",
  };

  return (
    <Router>
      <div className="app-container">
        <SideNavigation user={user} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
