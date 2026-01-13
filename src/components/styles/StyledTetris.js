import styled from "styled-components";

/* -------------------- WRAPPER -------------------- */
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 16px;
  }
`;

/* -------------------- MAIN LAYOUT -------------------- */
export const StyledTetris = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  gap: 16px;
  align-items: stretch; /* <-- important! stretch stage to max height */

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 200px;

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;

    aside {
      width: 90%;
      max-width: 320px;
      padding: 0;
      gap: 8px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`;
/* -------------------- WRAPPER -------------------- */
export const StageWrapper = styled.div`
  width: 100%;
  max-width: 400px;

  /* Desktop stage height */
  height: 600px;

  @media (max-width: 768px) {
    height: 50vh; /* mobile: half viewport */
    max-width: 320px;
  }
`;



