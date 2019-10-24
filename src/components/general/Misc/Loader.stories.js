import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { Div } from "../Containers";
import { Loader } from "./Loader";

export const CenterDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const BasicLoader = props => {
  return (
    <CenterDiv>
      <Loader />
    </CenterDiv>
  );
};

storiesOf("General | Loaders", module).add("BasicLoader", () => (
  <BasicLoader />
));
