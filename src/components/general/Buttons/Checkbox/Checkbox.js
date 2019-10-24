import React from "react";
import styled from "styled-components";
import { GLOBAL } from "../../../globalStyles";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: sub;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

const StyledCheckbox = styled.div`
  display: grid;
  width: 16px;
  height: 16px;
  background: ${props =>
    props.checked ? `${GLOBAL.colorPrimaryGradient}` : "white"};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #8bd9b2;

  vertical-align: middle;

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ checked, ...rest }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={checked} {...rest}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
