import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { Div } from "../../Containers";
import { H1, H1SC, H2, Paragraph, Label } from "../";

export const CenterDiv = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${H1SC} {
    color: black;
  }
`;

const Texts = props => {
  return (
    <CenterDiv>
      <H1 text="This is an H1" />
      <H2 text="This is an H2" />
      <Paragraph text="This is a Paragraph" />
      <Label>Simple Label. You can also use as a wrapper for a checkbox</Label>
    </CenterDiv>
  );
};

storiesOf("General | Texts", module).add("Texts", () => <Texts />);
