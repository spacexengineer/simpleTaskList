import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { Div } from "../../Containers";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

export const CenterDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BasicButton = props => {
  return (
    <CenterDiv>
      <Button text="Sign Up" />
    </CenterDiv>
  );
};

class BasicCheckbox extends React.Component {
  state = { checked: false };

  render() {
    return (
      <CenterDiv>
        <Checkbox
          label="Simple Checkbox"
          onClick={() =>
            this.setState(prevState => ({ checked: !prevState.checked }))
          }
          checked={this.state.checked}
        />
      </CenterDiv>
    );
  }
}

storiesOf("General | Buttons", module).add("BasicButton", () => (
  <BasicButton />
));

storiesOf("General | Buttons", module).add("BasicCheckbox", () => (
  <BasicCheckbox />
));
