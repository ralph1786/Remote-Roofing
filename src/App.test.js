import React from "react";
import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { shallow } from "enzyme";

let wrapper;

//use wrappedComponent when component is wrapped by withRouter.
beforeEach(() => {
  wrapper = shallow(<App.WrappedComponent />);
});

it("renders the Header component", () => {
  expect(wrapper.find(Header)).toHaveLength(1);
});

it("renders the Footer component", () => {
  expect(wrapper.find(Footer)).toHaveLength(1);
});
