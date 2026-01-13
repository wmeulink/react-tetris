import React from "react";
import "./styles/Display.css";

const Display = ({ gameOver, text }) => (
  <div
    className="display"
    style={{ color: gameOver ? "red" : "#999" }}
  >
    {text}
  </div>
);

export default Display;
