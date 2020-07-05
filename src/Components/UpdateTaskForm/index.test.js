import React from "react";
import { shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import UpdateTaskForm from "./index";

const task = {name: "foo", description: "bar"}


it("renders UpdateTaskForm without crashing", () => {
  createMount(<UpdateTaskForm />);
});

it("should have a text field", () => {
  const wrapper = shallow(<UpdateTaskForm dispatchUpdateTaskRequest={() => {}} tasks={task} />);
  const updateTextField = wrapper.find(".updateTextField");
  expect(wrapper.find(".updateTextField")).toHaveLength(2);
  expect(updateTextField.exists()).toBe(true);
});

it("should have a submit button", () => {
  const wrapper = shallow(<UpdateTaskForm dispatchUpdateTaskRequest={() => {}} tasks={task} />);
  const submitBtn = wrapper.find(".submit-btn");
  expect(submitBtn.exists()).toBe(true);
});

it("should call handleSubmitChange when submit button is clicked", () => {
  const wrapper = shallow(<UpdateTaskForm dispatchUpdateTaskRequest={() => {}} tasks={task} />);
  wrapper.instance().handleSubmitChange = jest.fn();
  wrapper.update();
  wrapper.find(".submit-btn").prop("onClick")();
});
