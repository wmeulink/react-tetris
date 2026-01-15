import React from "react";
import "./styles/Display.css";

const Display = ({ gameOver, text, children }) => (
  <div
    className="display"
    style={{ color: gameOver ? "red" : "#fff" }} // white text for normal
  >
    {children || text} {/* render children if provided, otherwise fallback to text */}
  </div>
);

export default Display;
