import React from "react";
import "./styles/Cell.css";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  const color = type === 0 ? "transparent" : TETROMINOS[type].color;

  return (
    <div
      className="cell"
      style={{
        border: type === 0 ? "0" : "1px solid rgba(0,0,0,0.25)",
        background:
          type === 0
            ? "transparent"
            : `linear-gradient(
                to bottom,
                rgba(${color}, 0.95) 0%,
                rgba(${color}, 1) 70%,
                rgba(${color}, 0.9) 100%
              )`,
      }}
    />
  );
};

export default React.memo(Cell);


