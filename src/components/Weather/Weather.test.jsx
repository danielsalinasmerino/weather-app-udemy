import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather";

test("Weather render", async () => {
  const temperature = 10;
  const { findByRole } = render(<Weather temperature={temperature} />);

  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent(temperature);
});
