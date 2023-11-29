import React from "react";
import { render } from "@testing-library/react";
import Companies from "./CompanyList";

it("matches snapshot", function () {
  const { asFragment } = render(<Companies />);
  expect(asFragment()).toMatchSnapshot();
});