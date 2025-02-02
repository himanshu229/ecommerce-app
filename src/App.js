// src/App.js (with routing)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";

const App = () => {
  const token = localStorage.getItem("userToken");
  const [user, setUser] = useState(token ?? null);


  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-left">
            <h1>E-Commerce App</h1>
          </div>
          <div className="navbar-right">
            {user && <LogoutButton onLogout={handleLogout} />}
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={!!user}>
                <HomePage user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage isAuthenticated={!!user}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
