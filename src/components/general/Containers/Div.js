import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const DivSC = styled.div`
  box-sizing: border-box;
`;

export const Div = props => {
  const { children, ...otherProps } = props;

  return <DivSC {...otherProps}>{children}</DivSC>;
};

Div.propTypes = {
  children: PropTypes.any
};

Div.defaultProps = {
  children: undefined
};
