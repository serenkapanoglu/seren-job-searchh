import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
  let item = { title: "CEO", salary: 1000000, equity: 10 };
  const { asFragment } = render(
      <UserProvider>
        <JobCard item={item} />
      </UserProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});