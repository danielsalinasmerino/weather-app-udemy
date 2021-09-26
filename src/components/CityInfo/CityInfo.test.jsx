import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; // SUT: System Under Testing

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const { findAllByRole } = render(<CityInfo city="Madrid" country="España" />);
  // Assert
  const cityAndCountryComponents = await findAllByRole("heading");
});
