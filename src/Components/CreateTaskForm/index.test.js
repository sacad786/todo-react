import React from "react";
import { shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import CreateTaskForm from "./index";

it("renders CreateTaskForm without crashing", () => {
  createMount(<CreateTaskForm />);
});

it("should have a text field", () => {
  const wrapper = shallow(
    <CreateTaskForm dispatchCreateTaskRequest={() => {}} />
  );
  const createTextField = wrapper.find(".createTextField");
  expect(wrapper.find(".createTextField")).toHaveLength(2);
  expect(createTextField.exists()).toBe(true);
});

it("should have a submit button", () => {
  const wrapper = shallow(
    <CreateTaskForm dispatchCreateTaskRequest={() => {}} />
  );
  const submitBtn = wrapper.find(".submit-btn");
  expect(submitBtn.exists()).toBe(true);
});

it("should call handleSubmitChange when submit button is clicked", () => {
  const wrapper = shallow(
    <CreateTaskForm dispatchCreateTaskRequest={() => {}} />
  );
  wrapper.instance().handleSubmitChange = jest.fn();
  wrapper.update();
  wrapper.find(".submit-btn").prop("onClick")();
});
