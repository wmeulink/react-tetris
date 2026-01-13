import styled from "styled-components";

export const StyledCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;       /* include borders in width/height */
  transform: translateZ(0);     /* forces GPU layer, helps with crisp edges */
  image-rendering: pixelated;   /* prevents blurring on scaled grids */

  border: ${props => (props.type === 0 ? "0" : "1px solid rgba(0,0,0,0.25)")};
  transition: background 0.1s ease;

  background: ${props =>
    props.type === 0
      ? "transparent"
      : `linear-gradient(
          to bottom,
          rgba(${props.color}, 0.95) 0%,
          rgba(${props.color}, 1) 70%,
          rgba(${props.color}, 0.9) 100%
        )`};

  &::before {
    content: '';
    display: ${props => (props.type === 0 ? "none" : "block")};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-radius: inherit;
    // box-shadow:
    //   inset 0 2px 4px rgba(255, 255, 255, 0.25),
    //   inset 0 -2px 4px rgba(0, 0, 0, 0.2),
    //   inset 1px 0 1px rgba(0, 0, 0, 0.08),
    //   inset -1px 0 1px rgba(0, 0, 0, 0.08);
  }
`;

