import styled from "styled-components";

export const StyledCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;

  /* Darker, crisper border */
  border: ${props => (props.type === 0 ? "0" : "1px solid rgba(0,0,0,0.25)")};

  transition: background 0.1s ease;

  /* Gradient for subtle plastic 3D feel */
  background: ${props =>
    props.type === 0
      ? "transparent"
      : `linear-gradient(
          to bottom,
          rgba(${props.color}, 0.95) 0%,  /* slightly brighter top */
          rgba(${props.color}, 1) 70%,    /* normal middle */
          rgba(${props.color}, 0.9) 100% /* slightly darker bottom */
        )`};

  /* Soft inset glow & subtle grid */
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
    box-shadow:
      /* Top highlight for plastic shine */
      inset 0 2px 4px rgba(255, 255, 255, 0.25),
      /* Bottom shadow for depth */
      inset 0 -2px 4px rgba(0, 0, 0, 0.2),
      /* Subtle side separation for “brick” look */
      inset 1px 0 1px rgba(0, 0, 0, 0.08),
      inset -1px 0 1px rgba(0, 0, 0, 0.08);
  }
`;
