import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import PublicTool from "./pages/PublicTool";
import Login from "./pages/Login"; // Assuming Login.js is already built
import Dashboard from "./pages/Dashboard"; // Assuming Dashboard.js is built
import ToolDetails from "./pages/ToolDetails"; // Assuming ToolDetails.js is built

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Sign-Up Page */}
          <Route path="/signup" element={<SignUp />} />
          
          {/* Route for Login Page */}
          <Route path="/" element={<Login />} />

          {/* Route for Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Route for Tool Details Page */}
          <Route path="/tools/:id" element={<ToolDetails />} />

          {/* Route for Public Pricing Tool */}
          <Route path="/public-tool" element={<PublicTool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
