import styled from "styled-components";

import bgImage from "../../img/bg5.jpg";


export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  
  /* Background color as fallback to reduce flash */
  background-color: #111;

  /* Full-screen background image */
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;

  /* Prevent scrollbars & hiding overflow */
  overflow: hidden;

  /* Optional: smooth appearance */
  will-change: background;
  background-color: #111; /* solid color first */
  -webkit-backface-visibility: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
