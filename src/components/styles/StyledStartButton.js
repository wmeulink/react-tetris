import styled from "styled-components";

export const StyledStartButton = styled.button`
  padding: 8px 16px;
  min-height: 32px;
  width: auto;
  border-radius: 12px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
`;
