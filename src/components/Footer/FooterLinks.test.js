import React from "react";
import { shallow } from "enzyme";
import FooterLinks from "./FooterLinks";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<FooterLinks />);
});

it("displays a list of links", () => {
  expect(wrapper.find("ul").children()).toHaveLength(6);
});
