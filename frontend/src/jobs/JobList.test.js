import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./JobList";

it("renders without crashing", function() {
  render(<Jobs />);
});

it("matches snapshot with no jobs", function() {
  const { asFragment } = render(<Jobs />);
  expect(asFragment()).toMatchSnapshot();
});