import React from "react";
import { shallow } from "enzyme";
import { createMount } from "@material-ui/core/test-utils";
import DisplayTasks from "./index";
const task = { name: "", description: "" };

it("renders DisplayTasks without crashing", () => {
  createMount(<DisplayTasks />);
});

it("when there's no tasks it should display the message", () => {
  const wrapper = shallow(
    <DisplayTasks
      tasks={[]}
      handleUpdateTasks={() => {}}
      dispatchDeleteTasksRequest={() => {}}
    />
  );
  expect(wrapper.find("#no-tasks")).toHaveLength(1);
});

it("when there's tasks it should display the tasks", () => {
  const wrapper = shallow(
    <DisplayTasks
      tasks={[task]}
      handleUpdateTasks={() => {}}
      dispatchDeleteTasksRequest={() => {}}
    />
  );
  expect(wrapper.find("#tasks")).toHaveLength(1);
});

// it("should call handleUpdateTasks when submit button is clicked", () => {
//     const wrapper = shallow(
//         <DisplayTasks
//           tasks={[task]}
//           handleUpdateTasks={() => {}}
//           dispatchDeleteTasksRequest={() => {}}
//         />
//       );
//   wrapper.instance().handleUpdateTasks = jest.fn();
//   wrapper.update();
//   wrapper.find("#updateBtn").prop("onClick")();
// });
