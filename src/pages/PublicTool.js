// src/pages/PublicTool.js
import React, { useState } from "react";
import "../styles/PublicTool.css";

const PublicTool = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const components = [
    { id: 1, name: "Component A", price: 100 },
    { id: 2, name: "Component B", price: 200 },
    { id: 3, name: "Component C", price: 300 },
  ];

  const handleSelect = (component) => {
    if (!selectedComponents.includes(component)) {
      setSelectedComponents([...selectedComponents, component]);
      setTotalPrice(totalPrice + component.price);
    }
  };

  return (
    <div className="public-tool-container">
      <h2>Pricing Tool</h2>
      <div className="components-list">
        {components.map((component) => (
          <div
            key={component.id}
            className="component-item"
            onClick={() => handleSelect(component)}
          >
            {component.name} - ${component.price}
          </div>
        ))}
      </div>
      <div className="summary">
        <h3>Selected Components</h3>
        <ul>
          {selectedComponents.map((component) => (
            <li key={component.id}>{component.name}</li>
          ))}
        </ul>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default PublicTool;
