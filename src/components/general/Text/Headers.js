import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GLOBAL } from "../../globalStyles";

export const H1SC = styled.h1`
  color: black;
  font-size: 40px;
  line-height: calc(18px + 1.8vw); /* Responsive Vertical Rhythm */
`;

export const H1 = props => {
  const { text, ...otherProps } = props;
  return <H1SC {...otherProps}>{text}</H1SC>;
};

H1.propTypes = {
  text: PropTypes.string
};

H1.defaultProps = {
  text: ""
};

export const H2SC = styled.h1`
  color: ${GLOBAL.primaryColor};
  font-size: 1.75em;
  line-height: calc(18px + 1.4vw); /* Responsive Vertical Rhythm */
`;

export const H2 = props => {
  const { text, ...otherProps } = props;
  return <H2SC {...otherProps}>{text}</H2SC>;
};

H2.propTypes = {
  text: PropTypes.string
};

H2.defaultProps = {
  text: ""
};
