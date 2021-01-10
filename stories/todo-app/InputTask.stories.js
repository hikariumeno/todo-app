import React from "react";

import { InputTask } from "../../src/todo-app/InputTask";

export default {
  title: "TodoApp/InputTask",
  component: InputTask,
};

const Template = (args) => <InputTask {...args} />;

export const Default = Template.bind({});
