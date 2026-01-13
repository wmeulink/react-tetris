import React from "react";
import "./styles/MobileControls.css";

const MobileControls = ({ moveLeft, moveRight, drop, rotate }) => {
  return (
    <div className="mobile-controls">
      <button onClick={moveLeft}>◀</button>
      <button onClick={rotate}>⟳</button>
      <button onClick={moveRight}>▶</button>
      <button onClick={drop}>▼</button>
    </div>
  );
};

export default MobileControls;
