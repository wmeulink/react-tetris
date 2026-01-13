import React from "react";
import "./styles/StartButton.css";

const StartButton = ({ callback, text }) => (
  <button className="start-button" onClick={callback}>
    {text}
  </button>
);

export default StartButton;
