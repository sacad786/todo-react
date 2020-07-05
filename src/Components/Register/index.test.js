import React from "react";
import { shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import Register from "./index";

it("renders Register without crashing", () => {
  createMount(<Register />);
});

it("should have a text field", () => {
  const wrapper = shallow(<Register dispatchCreateUserRequest={() => {}} />);
  const usernameTextField = wrapper.find(".usernameTextField");
  expect(wrapper.find(".usernameTextField")).toHaveLength(3);
  expect(usernameTextField.exists()).toBe(true);
});

it("should have a submit button", () => {
  const wrapper = shallow(<Register dispatchCreateUserRequest={() => {}} />);
  const registerBtn = wrapper.find(".register-btn");
  expect(registerBtn.exists()).toBe(true);
});

it("should call handleRegisterChange when submit button is clicked", () => {
  const wrapper = shallow(<Register dispatchCreateUserRequest={() => {}} />);
  wrapper.instance().handleRegisterChange = jest.fn();
  wrapper.update();
  wrapper.find(".register-btn").prop("onClick")();
});
