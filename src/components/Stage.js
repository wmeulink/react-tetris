import React from "react";
import Cell from "./Cell";
import "./styles/Stage.css";

const Stage = ({ stage }) => {
  const width = stage[0].length;
  const height = stage.length;

  return (
    <div
      className="stage"
      style={{
        gridTemplateColumns: `repeat(${width}, 24px)`,
        gridTemplateRows: `repeat(${height}, 24px)`,
        width: `${width * 24}px`,
        height: `${height * 24}px`,
      }}
    >
      {stage.map((row, y) =>
        row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell[0]} />)
      )}
    </div>
  );
};

export default React.memo(Stage);
