import styled from "styled-components";



/* ---------------- TETRIS WRAPPER ---------------- */
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0 40px 0; /* extra bottom padding for mobile buttons */
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
  gap: 10px;
  width: 100%;
  max-width: 900px;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-top:5px;
    width: 200px;

    div {
      display: flex;
      flex-direction: column; // stack score/rows/level on desktop
      gap: 10px;
      width: 100%;
    }
  }

  /* ---------------- MOBILE ---------------- */
  @media (max-width: 768px) {
    flex-direction: column;   // stack stage + mobile buttons + HUD
    align-items: center;
    width: 100%;
    gap: 8px;

    aside {
      width: 90%;
      max-width: 320px;
      padding: 0;
      gap: 1px;   

      div {
        display: flex;
        flex-direction: row;      // score/rows/level in a row
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        border:2px solid red;
      }
    }
  }
`;


/* ---------------- STAGE WRAPPER ---------------- */
export const StageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
