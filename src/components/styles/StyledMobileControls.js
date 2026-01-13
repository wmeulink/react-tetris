import styled from "styled-components";

export const StyledMobileControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;

  /* keep mobile-only display */
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ControlButton = styled.button`
  width: 56px;
  height: 56px;
  font-size: 20px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  border: none;
  touch-action: manipulation;

  &:active {
    transform: scale(0.95);
  }
`;
