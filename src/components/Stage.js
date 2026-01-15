import React from "react";
import Cell from "./Cell";
import { getStageScale, getDynamicUISpace } from "../gameHelpers";
import "./styles/Stage.css";

const BLOCK_SIZE = 24; // your base block size in pixels

const Stage = ({ stage }) => {
  const width = stage[0].length;
  const height = stage.length;

  // Step 1: calculate dynamic UI space
  const uiSpace = getDynamicUISpace();

  // Step 2: calculate stage scale
  const stagePixelHeight = height * BLOCK_SIZE;
  const scale = getStageScale(uiSpace, stagePixelHeight);

  const stageHeight = window.innerHeight - uiSpace; // remaining height for stage
const blockSize = Math.floor(stageHeight / stage.length); // dynamic block size


  return (
    <div
  className="stage"
  style={{
    gridTemplateColumns: `repeat(${width}, ${blockSize}px)`,
    gridTemplateRows: `repeat(${height}, ${blockSize}px)`,
    width: `${width * blockSize}px`,
    height: `${height * blockSize}px`,
  }}
>
        {stage.map((row, y) =>
          row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell[0]} />)
        )}
      </div>
  );
};

export default React.memo(Stage);
