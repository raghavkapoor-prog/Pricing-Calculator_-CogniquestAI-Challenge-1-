// src/pages/ToolDetails.js
import React, { useState } from "react";
import "../styles/ToolDetail.css";

const ToolDetails = () => {
  const [sections, setSections] = useState([]);

  const addSection = () => {
    setSections([...sections, { id: Date.now(), name: "", components: [] }]);
  };

  return (
    <div className="tool-details-container">
      <h2>Tool Details</h2>
      <button onClick={addSection} className="add-section-button">
        Add Section
      </button>
      {sections.map((section, index) => (
        <div key={section.id} className="section">
          <input
            type="text"
            placeholder="Section Name"
            value={section.name}
            onChange={(e) => {
              const updatedSections = [...sections];
              updatedSections[index].name = e.target.value;
              setSections(updatedSections);
            }}
          />
          <button className="add-component-button">Add Component</button>
        </div>
      ))}
    </div>
  );
};

export default ToolDetails;
