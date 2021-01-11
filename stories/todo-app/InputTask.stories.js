import React from "react";

import { InputTask } from "../../src/todo-app/InputTask";

export default {
  title: "TodoApp/InputTask",
  component: InputTask,
  argTypes: {
    onChange: { aciton: "chenged" },
    onSubmit: { action: "submited" },
  },
};

const Template = (args) => <InputTask {...args} />;

export const Default = Template.bind({});
