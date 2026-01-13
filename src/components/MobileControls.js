import React from "react";
import { StyledMobileControls, ControlButton } from "./styles/StyledMobileControls";

const MobileControls = ({
  moveLeft,
  moveRight,
  drop,
  rotate
}) => {
  return (
    <StyledMobileControls>
      <ControlButton onClick={moveLeft}>◀</ControlButton>
      <ControlButton onClick={rotate}>⟳</ControlButton>
      <ControlButton onClick={moveRight}>▶</ControlButton>
      <ControlButton onClick={drop}>▼</ControlButton>
    </StyledMobileControls>
  );
};

export default MobileControls;