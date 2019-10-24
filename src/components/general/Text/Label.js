import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const LabelSC = styled.label`
  font-weight: normal;
  margin: 0;
`;

export const Label = props => {
  const { children, style, htmlFor, ...otherProps } = props;

  return (
    <LabelSC style={style} htmlFor={htmlFor} {...otherProps}>
      {children}
    </LabelSC>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ])
};

Label.defaultProps = {
  htmlFor: "",
  children: []
};
