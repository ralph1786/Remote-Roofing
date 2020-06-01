import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer location={{}} />);
});

it("renders the FooterLinks component", () => {
  expect(wrapper.find(FooterLinks)).toHaveLength(1);
});

it("renders the FooterIcons component", () => {
  expect(wrapper.find(FooterIcons)).toHaveLength(1);
});
