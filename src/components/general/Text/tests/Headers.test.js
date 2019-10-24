import React from "react";
import ReactDOM from "react-dom";
import { H1, H2 } from "../Headers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<H1 />, div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<H2 />, div);
});
