import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 24px);
  grid-template-rows: repeat(${props => props.height}, 24px);
  background: #111;
  border: 2px solid #333;
`;


