import React from "react";
import FooterIcons from "./FooterIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<FooterIcons />);
});

it("renders three FontAwesomeIcon component", () => {
  expect(wrapper.find(".social-media-icons").children()).toHaveLength(3);
});

it("renders three download icons", () => {
  expect(wrapper.find(".download-icons").children()).toHaveLength(3);
});
