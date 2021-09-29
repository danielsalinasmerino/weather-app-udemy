import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; // SUT: System Under Testing

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const city = "Madrid";
  const country = "España";
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);
  // Assert
  const cityAndCountryComponents = await findAllByRole("heading");
  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
