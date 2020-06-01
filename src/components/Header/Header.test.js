import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header location={{}} />);
});

it("checks the text of trial button", () => {
  expect(wrapper.find(".container-buttons-trial-button").text()).toEqual(
    "Start your free trial"
  );
});

it("checks the text of login button", () => {
  expect(wrapper.find(".container-buttons-login").text()).toEqual("Log In");
});
