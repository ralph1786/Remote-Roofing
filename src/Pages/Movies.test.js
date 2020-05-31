import React from "react";
import Movies from "./Movies";
import ProductTile from "../components/ProductTile";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Movies />);
});

it("Movies component renders 21 or less ProductTile component", () => {
  //   console.log(wrapper.find(".container-movies").children().length);
  expect(wrapper.find(ProductTile)).toBeTruthy();
});
