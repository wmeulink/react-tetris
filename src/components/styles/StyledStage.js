import styled from "styled-components";
/* -------------------- GRID -------------------- */
export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 24px);
  grid-template-rows: repeat(${props => props.height}, 24px);
  width: ${props => props.width * 24}px;
  height: ${props => props.height * 24}px;
  background: #111;
  gap: 0; /* remove extra gap between cells */
  image-rendering: pixelated; /* sharp edges */
`;
