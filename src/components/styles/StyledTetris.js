import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  max-width: 900px;
  width: 100%;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 200px;
    flex-shrink: 0;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;

    aside {
  flex-direction: column; /* stack vertically overall */
  align-items: center;
  gap: 8px;
  width: 90%;
  max-width: 320px;
  padding: 0;

  div {
    /* This div contains Score / Rows / Level */
    display: flex;
    flex-direction: row; /* put them in a row */
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }
}

  }
`;
