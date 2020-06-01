import React from "react";
import Series from "./Series";
import { PulseLoader } from "react-spinners";
import { shallow } from "enzyme";
import ProductTile from "../components/ProductTile";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Series />);
});

it("checks that the PulseLoader component is rendered", () => {
  expect(wrapper.find(PulseLoader)).toHaveLength(1);
});

it("checks that the ProductTile component is rendered", () => {
  expect(wrapper.find(ProductTile)).toBeTruthy();
});
