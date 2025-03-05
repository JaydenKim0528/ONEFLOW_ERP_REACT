import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
// import InventoryPage from "./pages/InventoryPage";
// import ManagementPage from "./pages/ManagementPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/inventory" element={<InventoryPage />} /> */}
        {/* <Route path="/management" element={<ManagementPage />} /> */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
