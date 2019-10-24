import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GLOBAL } from "../../globalStyles";

export const ParagraphSC = styled.p`
  color: ${GLOBAL.primaryColor};
`;

export const Paragraph = props => {
  const { text, ...otherProps } = props;

  return <ParagraphSC {...otherProps}>{text}</ParagraphSC>;
};

Paragraph.propTypes = {
  text: PropTypes.string
};

Paragraph.defaultProps = {
  text: ""
};
