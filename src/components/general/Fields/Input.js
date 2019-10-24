import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const InputSC = styled.input`
  border: none;
  padding: 15px 20px;
  font-size: 1.5em;
  width: 80%;
  height: 1.5em;
  :focus {
    outline: none;
  }
`;

export const Input = props => {
  const { type, placeholder, value, onChange, ...otherProps } = props;

  return (
    <InputSC
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {}
};
