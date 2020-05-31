import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import ProductTile from "../components/ProductTile";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

it("Home component displays two ProductTile component", () => {
  expect(wrapper.find(ProductTile)).toHaveLength(2);
});
