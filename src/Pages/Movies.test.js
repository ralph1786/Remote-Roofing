import React from "react";
import Movies from "./Movies";
import ProductTile from "../components/ProductTile";
import { PulseLoader } from "react-spinners";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Movies />);
});

it("checks that the PulseLoader component is rendered", () => {
  expect(wrapper.find(PulseLoader)).toHaveLength(1);
});

it("Movies component to render ProductTile component", async () => {
  expect(wrapper.find(ProductTile)).toBeTruthy();
});
