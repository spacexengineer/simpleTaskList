import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GLOBAL } from "../../globalStyles";

export const ButtonSC = styled.button`
  min-width: 85px;
  padding: 0 20px;
  line-height: 38px;
  height: 38px;

  border-radius: 3px;
  box-sizing: border-box;
  transition: 0.3s;
  font-weight: normal;
  cursor: pointer;

  background: ${GLOBAL.colorPrimaryGradient};
  color: white;

  :hover {
    opacity: 0.5;
  }

  :disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const Button = props => {
  const { text, onClick, disabled, ...otherProps } = props;

  return (
    <ButtonSC
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...otherProps}
    >
      {text}
    </ButtonSC>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: "Button",
  disabled: false,
  onClick: () => {}
};
