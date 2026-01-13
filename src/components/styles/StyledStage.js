import styled from "styled-components";
/* -------------------- GRID -------------------- */
export const StyledStage = styled.div`
  display: grid;
  width: 100%;
  height: 100%; /* fill StageWrapper */
  background: #111;
  border: 2px solid #333;

  /* grid template: columns = stage width, rows = stage height */
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(${props => props.height}, 1fr);
  gap: 1px; /* optional: tiny gap between cells */
`;
