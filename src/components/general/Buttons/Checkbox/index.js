import React from "react";
import CheckboxUI from "./Checkbox";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Label, LabelSC } from "../../index";

export const CheckboxLabel = styled(Label)`
  margin-left: 10px;
  cursor: pointer;
`;

export const CheckboxSC = styled(Label)`
  cursor: pointer;
  width: fit-content;
  display: inline-block;
  vertical-align: middle;
  ${LabelSC} {
    display: inline-block;
  }
`;

export const Checkbox = props => {
  const { label, name, checked, onClick, ...rest } = props;
  return (
    <CheckboxSC htmlFor={label} onClick={onClick}>
      <CheckboxUI checked={checked} name={name} {...rest} />
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxSC>
  );
};

Checkbox.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  htmlFor: "",
  label: "",
  checked: false,
  onClick: () => {}
};
