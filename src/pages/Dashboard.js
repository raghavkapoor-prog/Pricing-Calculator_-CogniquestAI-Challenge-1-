// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock API call to fetch tools
    const mockTools = [
      { id: 1, name: "Pricing Tool A", version: "v1" },
      { id: 2, name: "Pricing Tool B", version: "v2" },
    ];
    setTools(mockTools);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/tools/create")} className="create-tool-button">
        Create New Tool
      </button>
      <ul className="tools-list">
        {tools.map((tool) => (
          <li key={tool.id} className="tool-item">
            <div>
              <strong>{tool.name}</strong> (Version: {tool.version})
            </div>
            <button
              className="view-tool-button"
              onClick={() => navigate(`/tools/${tool.id}`)}
            >
              View Tool
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
