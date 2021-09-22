import React from "react";

import CityInfo from ".";

export default {
  title: "CityInfo",
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={"Buenos Aires"} country={"Argentina"} />
);
