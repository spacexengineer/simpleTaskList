import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { Div } from "../../Containers";
import { Input, InputSC } from "../Input";

export const CenterDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${InputSC} {
    border: 1px solid black;
    width: 80%;
    height: 1.5em;
  }
`;

class BasicInput extends React.Component {
  state = { input: "" };

  updateValue = (field, e) => {
    const value = e.target.value;
    this.setState({ [field]: value });
  };

  render() {
    const { input } = this.state;
    return (
      <CenterDiv>
        <Input
          placeholder="example placeholder"
          onChange={this.updateValue.bind(this, "input")}
          value={input}
        />
      </CenterDiv>
    );
  }
}

storiesOf("General | Input", module).add("BasicInput", () => <BasicInput />);
