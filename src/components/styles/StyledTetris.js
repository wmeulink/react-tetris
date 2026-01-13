import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;    /* horizontal center */
  justify-content: flex-start;
  padding-top: 12px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 16px;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: row;       // <-- stage and HUD side by side
  justify-content: center;   // center horizontally in the wrapper
  align-items: flex-start;   // align stage and HUD at top
  gap: 16px;
  width: 100%;
  max-width: 900px;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 200px;

    div {
      display: flex;
      flex-direction: column; // stack score/rows/level on desktop
      gap: 8px;
      width: 100%;
    }
  }

  /* ---------------- MOBILE ---------------- */
  @media (max-width: 768px) {
    flex-direction: column;   // stack stage + mobile buttons + HUD
    align-items: center;
    gap: 12px;

    aside {
      width: 90%;
      max-width: 320px;
      padding: 0;
      gap: 8px;

      div {
        display: flex;
        flex-direction: row;      // score/rows/level in a row
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`;


export const StageWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  @media (min-width: 769px) {
    height: 600px; // desktop stage is taller
  }

  @media (max-width: 768px) {
    max-height: 50vh; // mobile stage is half the viewport
  }
`;
