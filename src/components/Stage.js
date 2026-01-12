import React from "react";
import { StyledStage } from "./styles/StyledStage";
import Cell from "./Cell";

// Only re-render Stage when the stage array changes
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row, y) =>
      row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell[0]} />)
    )}
  </StyledStage>
);

export default React.memo(Stage);

