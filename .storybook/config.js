import React from "react";
import { withKnobs } from "@storybook/addon-knobs/";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { configure, addDecorator } from "@storybook/react";
import "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo());

addDecorator(withKnobs);
addDecorator(withSmartKnobs);

// not most elegant solution, but it works
// can use other solutions once upgrade app to styled-components v4

// if there are additional styles that need to be injected can be added
// here
function withGlobalStyles(story) {
  require("../src/components/globalStyles");
  return story();
}

addDecorator(withGlobalStyles);

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
